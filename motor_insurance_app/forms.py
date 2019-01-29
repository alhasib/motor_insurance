from django import forms

class MotorInsuranceForm(forms.Form):
    customer_name = forms.CharField(max_length=30)
    customer_mobile_number = forms.IntegerField()
    vehicle_type = forms.CharField(max_length=30)
    vehicle_model = forms.CharField(max_length=30)
    registration_type = forms.CharField(max_length=30)
    cc_capacity = forms.CharField(max_length=30)
    coverage = forms.CharField(max_length=30)
    passanger_seat = forms.IntegerField()
    delivery_type = forms.CharField(max_length=30)
    ton_capacity = forms.CharField(max_length=30)