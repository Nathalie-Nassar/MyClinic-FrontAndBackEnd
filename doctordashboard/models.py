from django.db import models
from datetime import datetime    
from django.utils import timezone
from django.contrib.auth.models import User




class Clinic(models.Model):
   
    clinicName = models.CharField(max_length=100, blank=True, null=True)
    doctor    = models.ForeignKey(User, on_delete =  models.CASCADE, default="Moh", null = True) 
    _id = models.AutoField(primary_key=True, editable=False, null=False)
    
    def __str__(self):
        return self.clinicName
    

    
# class User(models.Model):
    
#     ADMINISTRATOR =  'Administartor'
#     DENTIST_ASSISTANT =  'Dentist_Assistant'
#     NURSE =  'Nurse'
#     SECRETARY = 'Secretary'

#     role_choices =  [   
#         (ADMINISTRATOR, 'Administartor'),
#         (DENTIST_ASSISTANT, 'Dentist_Assistant'),
#         (NURSE, 'Nurse'),
#         (SECRETARY, 'Secretary'),
#     ]
#     clinic =  models.ForeignKey(Clinic, on_delete = models.CASCADE)
#     role =  models.CharField(max_length = 100 , choices=role_choices, null=True)
#     first_name = models.CharField(max_length = 50, null=True)
#     last_name = models.CharField(max_length = 50,null=True)
#     MALE =  'M'
#     FEMALE =  'F'
#     OTHER =  'O'
#     gender_choices =  [
#         (MALE, 'Male'),
#         (FEMALE, 'Female'),
#         (OTHER, 'Other'),
#     ]
#     gender =  models.CharField(max_length= 2, choices= gender_choices, default= OTHER, null=True)
#     email =  models.EmailField(null=True)
#     phone_number =  models.CharField(max_length=8, null=True)
#     _id = models.AutoField(primary_key=True, editable=False)
    
#     def __str__(self):
#         return self.phone_number
    
    


class Room(models.Model):
    clinic =  models.ForeignKey(Clinic, on_delete = models.CASCADE, default="")
    doctor    = models.ForeignKey(User, on_delete =  models.CASCADE, default=0, null = True) 
    room_name = models.CharField(max_length = 100, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return self.room_name
    
    


class Operation(models.Model):
    clinic =  models.ForeignKey(Clinic, on_delete = models.CASCADE, default="")
    room =  models.ForeignKey(Room, on_delete =  models.CASCADE, default="")
    title = models.CharField(max_length = 200 ,blank= True, null = True)
    cost =  models.DecimalField(max_digits=10, decimal_places=2, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    description =  models.CharField(max_length = 200, blank=True, null= True)
    def __str__(self):
        return self.title
    
    


class Patient(models.Model):
   
    firstName   = models.CharField(max_length=100, blank=True, null=True)
    lastName    = models.CharField(max_length=100, blank=True, null=True)
    PhoneNumber = models.CharField(max_length=100, blank=True, null=True)
    email       = models.EmailField(blank=True, null=True)
    birthDate   = models.DateField(blank=True, null=True)
    address     = models.CharField(max_length = 50)
    gender_choices =  [
        
        ("MALE", "Male"),
        ("FEMALE", "Female"),
        ("OTHER", "Other"),
    ]
    gender         = models.CharField(max_length= 20, choices= gender_choices, default= "OTHER")
    medicattions   = models.BooleanField(default=False, null=  True)
    med_text       = models.TextField(blank =  True, null =  True)
    allergies      = models.BooleanField(default=False, null= True)
    allergies_text = models.TextField(blank =  True, null=True)
    E_firstName = models.CharField(max_length=100, blank=True, null=True)
    E_lastName = models.CharField(max_length=100, blank=True, null=True) 
    E_contactNumber = models.CharField(max_length=100, blank=True, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.PhoneNumber
    
    
    

class Appointment(models.Model):
    
    room      = models.ForeignKey(Room, on_delete = models.CASCADE, default="Operation", null = True)
    doctor    = models.ForeignKey(User, on_delete =  models.CASCADE, default="Moh", null = True) 
    firstName = models.CharField(max_length=100, blank=True, null=True)
    lastName  = models.CharField(max_length=100, blank=True, null=True)
    date      = models.DateField(auto_now=False, null=True)
    time      = models.TimeField(auto_now=False, null=True)
    duration =  models.IntegerField(null=False, default=0)
    operation = models.OneToOneField(Operation, on_delete= models.CASCADE, default="Tooth Extraction", null=True)
    reason =  models.CharField(max_length=500, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.firstName +  " " + self.lastName
    
    

class Visit(models.Model):
    
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE,null=False,default=1)
    doctor = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE,null=False)
    operation = models.ForeignKey(Operation, on_delete=models.CASCADE,null=True)
    todayvisit = models.DateField(default=datetime.now)
    nextvisit = models.DateField(default=datetime.now)
    time =  models.TimeField(default=timezone.now)
    med_text =  models.TextField(blank=True, null=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.patient)
    
    
class JournalEntryType(models.Model):
    title = models.CharField(max_length=255)
    
    def __str__(self):
        return self.title


class PaymentJournal(models.Model):
    
    patient = models.ForeignKey(Patient, null= False,on_delete=models.CASCADE)
    journal_entry_type = models.ForeignKey(JournalEntryType, null=False,on_delete=models.CASCADE)
    clinic =  models.ForeignKey(Clinic, on_delete = models.CASCADE)
    totalBalance = models.DecimalField(max_digits=10, default=0.00, decimal_places=2, blank=True, null=True)
    pendingBalance = models.DecimalField(max_digits=10, default=0.00, decimal_places=2, blank=True, null=True)
    AmountDue = models.DecimalField(max_digits=10, default=0.00, decimal_places=2, blank=True, null=True)    
    reason =  models.CharField(max_length=100) 