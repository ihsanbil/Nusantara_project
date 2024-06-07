"""
URL configuration for web_jisah project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from jisahApp import views
from django.urls import path, include

urlpatterns = [
    path('', views.index, name='index'),
    path('layanan/', views.layanan, name='layanan'),
    path('konsultasi/', views.konsultasi, name='konsultasi'),
    path('paket/', views.paket, name='paket'),
    path('quiz-psikolog/', views.quiz_psikolog, name='quiz_psikolog'),
    path('admin/', admin.site.urls),
    path('jisahApp/', include('jisahApp.urls'))
]
