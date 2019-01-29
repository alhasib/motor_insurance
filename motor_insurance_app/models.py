from django.db import models

class Vehicle(models.Model):
    vehicle_type = models.CharField(max_length = 30)
     
    def __str__ (self):
        return self.vehicle


class VehicleRegistrationType(models.Model):
    registration_type = models.CharField(max_length = 50)

    def __str__(self):
        return self.registration_type 


class Capacity(models.Model):
    cc_capacity = models.CharField(max_length = 50)

    def __str__(self):
        return self.cc_capacity

class Coverage(models.Model):
    coverage = models.CharField(max_length = 50)

    def __str__(self):
        return self.coverage


class PassangerSeat(models.Model):
    passanger_seat = models.IntegerField()

    def __str__(self):
        return str(self.passanger_seat)


class DeliveryType(models.Model):
    delivery_type = models.CharField(max_length = 50)

    def __str__(self):
        return self.delivery_type


class TonCapacity(models.Model):
    ton_capacity = models.CharField(max_length = 50)

    def __str__(self):
        return self.ton_capacity


class MotorInsurance(models.Model):
    customer_name = models.CharField(max_length = 30)
    customer_mobile_number = models.IntegerField()
    vehicle_type = models.CharField(max_length = 30)
    vehicle_model = models.CharField(max_length = 50)
    registration_type = models.CharField(max_length = 30)
    cc_capacity = models.CharField(max_length = 30)
    coverage = models.CharField(max_length = 30)
    passanger_seat = models.CharField(max_length = 30)
    delivery_type = models.CharField(max_length = 30)
    ton_capacity = models.CharField(max_length = 30)

    def __str__(self):
        return self.customer_name
