from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Teacher(models.Model):
    teacher = models.OneToOneField(User, on_delete=models.CASCADE, default=1)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    about = models.TextField()

    def __str__(self):
        return self.teacher.username

    def get_absolute_url(self):
        return reverse("teachers:index", kwargs={"id": self.id})

class Lesson(models.Model):
    prof = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    lesson_name = models.CharField(max_length=120)
    lesson_description = models.TextField()

    def __str__(self):
        return self.lesson_name

class Subject(models.Model):
    ders = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    subject_name = models.CharField(max_length=120)
    subject_description = models.TextField()

    def __str__(self):
        return self.subject_name

class Question(models.Model):
    konu = models.ForeignKey(Subject, on_delete=models.CASCADE)
    question_description = models.TextField()
    question_answer = models.TextField()
    question_point = models.IntegerField()
    question_time = models.TimeField()
    question_date = models.DateField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return self.question_description