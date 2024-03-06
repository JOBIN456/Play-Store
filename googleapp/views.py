from django.shortcuts import render
from .models import *
# Create your views here.
def base(request):
    windows=Game_Category.objects.get(name='windows')

    window_games=Game.objects.filter(category=windows)[:6]
    context={
        "window_games":window_games
    }
    return render(request,"home.html",context)
def phone(request):
    return render(request,"phone.html")
def tablet(request):
    return render(request,"tablet.html")

def tv(request):
    return render(request,"tv.html")

def chromebook(request):
    return render(request,"chromebook.html")
def watch(request):
    return render(request,"watch.html")

