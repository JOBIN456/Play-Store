from django.shortcuts import render
from .models import *
# Create your views here.
def base(request):
    windows=Game_Category.objects.get(name='windows')

    window_games=Game.objects.filter(category=windows)[:6]
    # print(window_games.vedio_code)
    window_games_2=Game.objects.filter(category=windows)[4:10]
    window_games_3=Game.objects.filter(category=windows)[11:16]

    context={
        "window_games":window_games,
        "window_games_2":window_games_2,
        "window_games_3":window_games_3,
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


def apps(request):
    return render(request,"apps.html")

def movies(request):
    return render(request,"movies.html")
def books(request):
    return render(request,"books.html")

def children(request):
    return render(request,"children.html")



    return render(request,"phone.html")
def app_tablet(request):
    return render(request,"app-tablet.html")

def app_tv(request):
    return render(request,"app-tv.html")

def app_chromebook(request):
    return render(request,"app-chromebook.html")
def app_watch(request):
    return render(request,"app-watch.html")
def app_car(request):
    return render(request,"app-car.html")