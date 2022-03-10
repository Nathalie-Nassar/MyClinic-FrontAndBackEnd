# Generated by Django 4.0.1 on 2022-03-07 23:36

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('doctordashboard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='createdby',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='datetime',
            field=models.DateTimeField(blank=True, default=datetime.date.today, null=True),
        ),
    ]