from django.urls import path
from .import views 
urlpatterns = [
    path('', views.base,name="base"),
    path('phone/', views.phone,name="phone"),
    path('tv/', views.tv,name="tv"),
     path('tablet/', views.tablet,name="tablet"),
    path('chromebook/', views.chromebook,name="chromebook"),
    path('watch/', views.watch,name="watch"),
     


]
