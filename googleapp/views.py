from django.shortcuts import render
from .models import *
from django.contrib.auth.models import User
from django.contrib import messages,auth
from django .shortcuts import redirect
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

def login(request):
    if  request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            messages.success(request,"Login Succesfull")
            return redirect('/')
        else:
            messages.error(request,'Enter a Valid Username and Password')
            return redirect('login')
    return render(request,'login.html')

def register(request):
    if request.method=='POST':
        username=request.POST['username']
        email=request.POST['email']
        password=request.POST['password']
        c_password=request.POST['c_password']
        if password==c_password:
            if User.objects.filter(username=username).exists():
                messages.info(request,'Username Taken')
                return redirect('register')
            else:
                user=User.objects.create_user(username=username,password=password,email=email)
                user.save()
                print("user created")
                messages.success(request, 'User created successfully. You can now log in.')
                return redirect('login')
        else:
            messages.info(request,'Password is not Matching')
            return redirect('register')
        

    return render(request,'register.html')
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
def details(request):
    return render(request,"details.html")