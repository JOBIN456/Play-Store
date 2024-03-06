from django.contrib import admin

# Register your models here.
from .models import  *

admin.site.register(Game_Category)
admin.site.register(Game)