from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
import numpy as np
from .models import AIModel
from .serializers import AIModelSerializer
from .knn import model, scaler  # assuming the training script is saved as knn_model.py

class AIModelListView(generics.ListAPIView):
    queryset = AIModel.objects.all()
    serializer_class = AIModelSerializer

class PredictPriceView(APIView):
    parser_classes = [JSONParser]

    def post(self, request, format=None):
        data = request.data.get('data')
        if not data:
            return Response({'error': 'Data not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Extracting data from the request
            input_data = np.array([[
                data.get('accommodates', 0),
                data.get('bedrooms', 0),
                data.get('bathrooms', 0),
                data.get('beds', 0),
                data.get('minimum_nights', 0),
                data.get('maximum_nights', 0),
                data.get('number_of_reviews', 0)
            ]])
            
            # Normalize the input data using the same scaler used during training
            input_data_normalized = scaler.transform(input_data)
        except Exception as e:
            return Response({'error': 'Invalid data format', 'details': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Model prediction
            prediction = model.predict(input_data_normalized)
            predicted_value = prediction[0] if isinstance(prediction, np.ndarray) else prediction
        except Exception as e:
            return Response({'error': 'Prediction failed', 'details': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({"predicted_value": predicted_value}, status=status.HTTP_200_OK)
