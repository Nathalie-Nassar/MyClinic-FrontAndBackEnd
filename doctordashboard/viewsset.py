from rest_framework import viewsets
from . import models
from . import serializers


class PatientViewSet(viewsets.ModelViewSet):
    queryset =  models.Patient.objects.all()
    serializer_class = serializers.PatientSerializer


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = models.User.objects.all()
#     serializer_class = serializers.UserSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset =  models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

# class VisitViewSet(viewsets.ModelViewSet):
#     queryset =  models.Visit.objects.all()
#     serializer_class = serializers.VisitSerializer

# class PaymentJournalViewSet(viewsets.ModelViewSet):
#     queryset =  models.PaymentJournal.objects.all()
#     serializer_class = serializers.PaymentJournalSerializer

# class VisitOperationViewSet(viewsets.ModelViewSet):
#     queryset =  models.VisitOperation.objects.all()
#     serializer_class = serializers.VisitOperationSerializer
    
# class RoleViewSet(viewsets.ModelViewSet):
#     queryset =  models.Role.objects.all()
#     serializer_class = serializers.RoleSerializer
    
class OperationViewSet(viewsets.ModelViewSet):
    queryset =  models.Operation.objects.all()
    serializer_class = serializers.OperationSerializer
    
class RoomViewSet(viewsets.ModelViewSet):
    queryset =  models.Room.objects.all()
    serializer_class = serializers.RoomSerializer
    