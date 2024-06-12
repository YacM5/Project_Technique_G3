from django.contrib import admin

from .models import AIModel

@admin.register(AIModel)
class AIModelAdmin(admin.ModelAdmin):
    list_display = ('id','name','description','model_file','created_at')