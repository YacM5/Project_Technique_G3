# Prédiction des Prix Airbnb

Ce projet implémente un système de prédiction des prix de nuitées Airbnb, utilisant le machine learning pour estimer les coûts en fonction des caractéristiques de la propriété. L'application est développée avec un backend en Django et un frontend en React, offrant une interface utilisateur pour entrer les données des propriétés et recevoir les estimations de prix.

## Caractéristiques

- **Modèles de Machine Learning**: Implémentation et comparaison de modèles tels que KNN et Decision Tree, avec sélection du modèle KNN pour sa meilleure performance.Etant données qu'il s'agit d'une prédictions, ils nous sembleaient juste bd'utiliser ses modèles
- **Nettoyage des données**: Traitement préalable des données pour assurer la qualité et la précision des prédictions.
- **Interface utilisateur interactive**: Permet aux utilisateurs d'entrer les caractéristiques de leur location et d'obtenir une prédiction de prix.

## Technologies utilisées

- **Backend**: Django
- **Frontend**: React
- **Machine Learning**: scikit-learn et pandas

## Structure du projet

```
/
├── backend/                                          # Code source Django
├── backend/media/models/paris_airbnb.csv             # Datasets utiliser dans le projet
├── backend/api/                                      # Application Django pour gérer les requêtes API.
├── backend/api/models.py                             # Définit les modèles de données (le cas échéant).
├── backend/api/views.py                              # Contient les vues API pour l'entraînement et la prédiction.
├── backend/api/urls.py                               # Routage des URL pour les points de terminaison API.
├── backend/api/serializers.py                        # Sérialiseurs pour convertir les données entre JSON et       objets Python.
├── backend/api/knn.py                                # Contient l'implémentation du modèle KNN.
├── frontend/                                         # Code source React
├── projet_airbnb.ipynb                               # Notebook utiliser pour nettoyer & visualiser &       Modéliser different models afin de prendre le meilleur 
└── README.md
/
```
##  Librairies/Bibliothéque
- geopy 2.4.1
- seaborn 0.13.2
- matplotlib  3.7.5
- scikit-learn  1.3.2
- pandas 1.5.3
- numpy 1.24.2
- python 3.8.5
- Django 4.2

## Installation et Configuration

Pour faciliter la gestion des environnements de développement pour le backend et le frontend, suivez les étapes ci-dessous dans des terminaux séparés mais sur une seule fenêtre de terminal, en utilisant des onglets ou des sessions distinctes.


1. **Je télécharge le Zip**
2. **Décompresser le zip**
3. **Ouvrir dans Vs-code**
   #### Backend
4. **Créer l'environnement virtuel**
   python -m venv venv
5. **Activer l'environnement virtuel**
   # Sur Windows
   venv\Scripts\activate
   # Sur Unix ou MacOS
   source venv/bin/activate
6. **Installer les dépendances**
  pip install -r requirements.txt
7. **Lancer le serveur Django**
    python manage.py runserver
   #### Frontend
8. **Installer les dépendances NPM**
    npm install
9. **Lancer le serveur de développement**
    # Sur Unix ou MacOS
   sudo npm run dev
   # Sur Windows
   npm run dev
10.**Lien Serveur**
Prendre le lien du serveur et le mettre dans le navigateur
## Auteurs
Mohamed ABDI GUIRREH & Ibrahim BOUGHANIME & Ahmed MOUSSA
