from django.contrib import admin

from .models import Teacher, Lesson, Subject, Question

admin.site.register(Teacher)
admin.site.register(Lesson)
admin.site.register(Subject)
admin.site.register(Question)