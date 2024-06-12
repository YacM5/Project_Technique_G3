from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np


class Fashion_mnist:
    def __init__(self) -> None:
        # Load the pre-trained model from Google Drive
        self.model_path = 'C:/Users/csahm/OneDrive/Desktop/MyWork/WEB/VisualVision/backend/media/models/Fashion_mnist.h5'
        self.model = load_model(self.model_path)
    def getSummary(self):
        return self.model.summary()

    def predict(self,image_path):
        # Load and preprocess the image
    
        img = image.load_img(image_path, target_size=(28, 28), grayscale=True)
        img_array = image.img_to_array(img)
        img_array /= 255.0  # Normalize pixel values
        img_array = np.expand_dims(img_array, axis=0)
        # Make predictions on the image
        prediction = self.model.predict(img_array)
        predicted_label = np.argmax(prediction)
        confidence = np.max(prediction)

        return f"Predicted Label: {predicted_label}, Confidence: {confidence:.2f}"







model = Fashion_mnist()
print(model.predict("C:/Users/csahm/Downloads/test.png"))


