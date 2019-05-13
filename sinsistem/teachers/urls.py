from django.contrib import admin
from django.urls import path
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
    path('^$', views.index, name='index'),
    path('^logout/', views.teacher_logout, name='logout'),
    ]