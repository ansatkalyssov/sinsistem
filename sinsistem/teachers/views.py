from django.shortcuts import render, redirect
from .forms import TeacherForm, TeacherProfileForm, QuestionForm, LessonForm, SubjectForm
from .models import Lesson, Teacher, Question, Subject
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from urllib.parse import quote_plus

def index(request):
    instance = Lesson.objects.all()
    context = {
        "lesson_list": instance
    }
    return render(request, "teachers/index.html", context)

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

def create_question(request):
    created = False
    if request.method == "POST":
        lesson_form = LessonForm(data=request.POST)
        subject_form = SubjectForm(data=request.POST)
        question_form = QuestionForm(data=request.POST)
        if question_form.is_valid() and lesson_form.is_valid() and subject_form.is_valid():
            question = question_form.save()
            question.save()
            lesson = lesson_form.save()
            lesson.save()
            subject = subject_form.save()
            subject.save()
            created = True
            messages.success(request, "Successfully Created!!!")
        else:
            print(question_form.errors, lesson_form.errors, subject_form.errors)
    else:
        question_form = QuestionForm()
        lesson_form = LessonForm()
        subject_form = SubjectForm()
    all_lessons = Lesson.objects.all()
    all_subjects = Subject.objects.all()
    context = {
        "question_form": question_form,
        "lesson_form": lesson_form,
        "all_subjects": all_subjects,
        "created": created,
        "all_lessons": all_lessons,
                             }
    return render(request, "teachers/create_question.html", context)

# def get_lessons(request):
#     lesson = request.GET["selected_lesson"]
#     print(lesson)
#     result_set = []
#     all_subjects = []
#     answer = str(lesson[1:-1])
#     selected_lesson = Lesson.objects.get(lesson_name=answer)
#     all_lessons = selected_lesson.subject_set.all()
#     for sbj in all_subjects:
#         result_set.append({'subject_name': sbj.subject_name})
#     return HttpResponse(simplejson.dumps(result_set), mimetype='application/json', content_type='application/json')

