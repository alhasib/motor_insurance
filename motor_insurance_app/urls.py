from django.urls import path, include
from .views import *


urlpatterns = [
    path('motor-insurance/', motor_insurance ),
]
