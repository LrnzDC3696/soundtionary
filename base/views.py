from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import requests;

# Create your views here.

def index(request):
    return render(request, 'base/index.html')

def avatars(request):
    return "https://avatars.dicebear.com/api/adventurer/lol.svg"


