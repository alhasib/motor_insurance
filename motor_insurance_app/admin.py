from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Vehicle)
admin.site.register(VehicleRegistrationType)
admin.site.register(Capacity)
admin.site.register(Coverage)
admin.site.register(PassangerSeat)
admin.site.register(DeliveryType)
admin.site.register(TonCapacity)
admin.site.register(MotorInsurance)
