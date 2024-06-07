from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'jisahApp/index.html',)
def layanan(request):
    return render(request, 'jisahApp/layanan.html',)
def konsultasi(request):
    return render(request, 'jisahApp/konsultasi.html',)
def paket(request):
    return render(request, 'jisahApp/paket.html',)
def quiz_psikolog(request):
    return render(request, 'jisahApp/quiz_psikolog.html')