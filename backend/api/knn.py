import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsRegressor
import os
def initialize_and_train_model():
    # Read the CSV file and preprocess the data
    dataset_file = 'paris_airbnb.csv'
    data = pd.read_csv(os.getcwd()+f'/media/models/{dataset_file}')
    np.random.seed(1)
    random_indices = np.random.permutation(data.index)
    paris_listings = data.loc[random_indices]
    
    # Preprocess the 'price' column
    paris_listings['price'] = paris_listings['price'].str.replace(',', '').str.replace('$', '').astype(float)
    
    # Drop unnecessary columns
    paris_listings.drop(['room_type', 'city', 'state', 'longitude', 'latitude', 'zipcode',
                         'host_response_rate', 'host_acceptance_rate', 'host_listings_count',
                         'cleaning_fee', 'security_deposit'], axis=1, inplace=True)
    
    # Drop rows with missing values in specific columns
    paris_listings.dropna(subset=['bedrooms', 'bathrooms', 'beds'], inplace=True)
    
    # Normalize the features
    scaler = StandardScaler()
    features = paris_listings.drop(['price'], axis=1)
    features_normalized = scaler.fit_transform(features)
    
    # Retrieve the price column
    price = paris_listings['price'].values
    
    # Create normalized listings DataFrame
    features_normalized = pd.DataFrame(features_normalized, columns=features.columns)
    normalized_listings = features_normalized.copy()
    normalized_listings['price'] = price
    
    # Split the data into training and testing sets
    X = normalized_listings.drop('price', axis=1)
    y = normalized_listings['price']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)
    
    # Initialize and train the KNN model with the best parameters
    knn_model = KNeighborsRegressor(n_neighbors=10, weights='uniform', metric='euclidean')
    knn_model.fit(X_train, y_train)
    
    return knn_model, scaler

# Initialize the model once
model, scaler = initialize_and_train_model()