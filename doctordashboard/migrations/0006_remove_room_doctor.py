# Generated by Django 4.0.4 on 2022-04-21 09:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('doctordashboard', '0005_remove_patient_allergies_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='doctor',
        ),
    ]
