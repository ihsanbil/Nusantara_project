from django.urls import path
from jisahApp import views


urlpatterns = [
    path('', views.index, name='index'),
    path('layanan/', views.layanan, name='layanan'),
    path('konsultasi/', views.konsultasi, name='konsultasi'),
    path('paket/', views.paket, name='paket'),
    path('quiz-psikolog/', views.quiz_psikolog, name='quiz_psikolog'),
]