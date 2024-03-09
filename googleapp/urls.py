from django.urls import path
from .import views 
urlpatterns = [
    path('', views.base,name="base"),
    path('phone/', views.phone,name="phone"),
    path('tv/', views.tv,name="tv"),
     path('tablet/', views.tablet,name="tablet"),
    path('chromebook/', views.chromebook,name="chromebook"),
     path('watch/', views.watch,name="watch"),


    path('apps/', views.apps,name="apps"),
    path('movies/', views.movies,name="movies"),
    path('books/', views.books,name="books"),
     path('children/', views.children,name="children"),

     path('app-tv/', views.app_tv,name="app_tv"),
     path('app-tablet/', views.app_tablet,name="app_tablet"),
     path('app-chromebook/', views.app_chromebook,name="app_chromebook"),
     path('app-watch/', views.app_watch,name="app_watch"),
     path('app_car/', views.app_car,name="app_car"),
     path('login/', views.login,name="login"),

     path('register/', views.register,name="register"),



     


]
