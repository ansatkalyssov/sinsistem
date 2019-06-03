from django.contrib import admin
from django.urls import path, include
from teachers import views
app_name = 'teachers'
from .views import (
    teacher_login,
    register,
    index,
    logout
)
urlpatterns = [
    path('teacher_login/', teacher_login, name='teacher_login'),
    path('register/', register, name='register'),
    path('index/', views.index, name='index'),
    path('create_question/', views.create_question, name='create_question'),
    path('^logout/', views.teacher_logout, name='logout'),
    ]