# Generated by Django 4.2 on 2024-04-15 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_aimodel_architecture_aimodel_confusion_matrix'),
    ]

    operations = [
        migrations.AddField(
            model_name='aimodel',
            name='dataset',
            field=models.CharField(default='', max_length=100),
        ),
    ]
