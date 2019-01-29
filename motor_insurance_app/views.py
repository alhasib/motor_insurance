from django.shortcuts import render
from .forms import MotorInsuranceForm

# Create your views here.
def motor_insurance(request):
    # form = MotorInsuranceForm()
    # context = {'form':form}
    return render(request, 'motor_insurance_app/index.html')