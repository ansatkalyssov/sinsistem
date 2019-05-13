from django import forms
from .models import Teacher
from django.contrib.auth.models import User

class TeacherForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = User
        fields = ["username", "password", "email"]

class TeacherProfileForm(forms.ModelForm):
    class Meta:
        model = Teacher
        fields = ["first_name", "last_name", "title", "about"]