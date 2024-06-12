from django.db import models
import json
class AIModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    
    
    accuracy = models.DecimalField(decimal_places=2,max_digits=5,default=0.0)
    
    model_file = models.FileField(upload_to='models/')
    dataset = models.CharField(max_length=100,default='')
    created_at = models.DateTimeField(auto_now_add=True)

    
    

    def __str__(self):
        return self.name