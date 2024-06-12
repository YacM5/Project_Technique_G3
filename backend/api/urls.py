from django.urls import path
from .views import PredictPriceView

urlpatterns = [
    path('predict/', PredictPriceView.as_view(), name='predict'),
]
