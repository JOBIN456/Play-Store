from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request,"home.html")
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