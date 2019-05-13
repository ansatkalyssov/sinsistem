from django.shortcuts import render
from .forms import TeacherForm, TeacherProfileForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request, "teachers/index.html")

@login_required
def special(request):
    return HttpResponse("You are logged in !")

@login_required
def teacher_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse("teachers:index"))

def register(request):
    registered = False
    if request.method == "POST":
        teacher_form = TeacherForm(data=request.POST)
        profile_form = TeacherProfileForm(data=request.POST)
        if teacher_form.is_valid() and profile_form.is_valid():
            teacher = teacher_form.save()
            teacher.set_password(teacher.password)
            teacher.save()
            profile = profile_form.save(commit=False)
            profile.teacher = teacher
            profile.save()
            registered = True
        else:
            print(teacher_form.errors, profile_form.errors)
    else:
        teacher_form = TeacherForm()
        profile_form = TeacherProfileForm()
    return render(request, "teachers/registration.html",
                          {"teacher_form": teacher_form,
                           "profile_form": profile_form,
                           "registered": registered})

def teacher_login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        teacher = authenticate(username=username, password=password)
        if teacher:
            if teacher.is_active:
                login(request, teacher)
                return HttpResponseRedirect(reverse("teachers:index"))
            else:
                return HttpResponse("Your account was inactive")
        else:
            print("Someone tried to login and failed")
            print("They used username: {} and password: {}".format(username, password))
            return HttpResponse("Invalid login details given")
    else:
        return render(request, "teachers/login.html", {})



