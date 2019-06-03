from random import choices
from django import forms
from .models import Teacher, Lesson, Subject, Question
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

class LessonForm(forms.ModelForm):
    class Meta:
        model = Lesson
        fields = ["lesson_name"]

class AllLessonForm(forms.ModelForm):
    all_lessons = forms.ModelChoiceField(queryset=Lesson.objects.all())
    class Meta:
        model = Lesson
        fields = ["all_lessons"]

class SubjectForm(forms.ModelForm):
    class Meta:
        model = Subject
        fields = ["subject_name"]

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ["question_description", "question_answer", "question_point", "question_time"]


        # widgets = {
        #     'question_date': forms.DateInput(attrs={'class': 'datepicker'})
        # }
    # def __init__(self, user, *args, **kwargs):
    #     super(LessonForm, self).__init__(*args, **kwargs)
    #     self.fields["lesson"] = forms.ChoiceField(choices=[(lesson.id, lesson.name) for lesson in Lesson.objects.all()])

