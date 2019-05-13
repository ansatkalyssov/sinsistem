from django.db import models
from django.contrib.auth.models import User

class Teacher(models.Model):
    teacher = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    about = models.TextField()

    def __str__(self):
        return self.teacher.username

