from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import requests
import os 

# Create your views here.
base_url = 'https://api.hop.io'
headers = {'authorization': os.environ['HOP_PROJECT_TOKEN']}

def index(request):
    return render(request, 'base/index.html')

def room(request):
    return render(request, 'base/room.html')

def avatars(request):
    return "https://avatars.dicebear.com/api/adventurer/lol.svg"
