from django.db import models

# Create your models here.
class Game_Category(models.Model):
    name=models.TextField(max_length=1500)


    def __str__(self):
        return self.name


class Game(models.Model):
    image=models.ImageField(upload_to='media/')
    small_image=models.ImageField(upload_to='media/',blank=True,null=True)
    category = models.ForeignKey(Game_Category, on_delete=models.CASCADE,blank=True,null=True)
    vedio_code=models.CharField(max_length=400)
    main_head=models.TextField(max_length=400)
    sub_head=models.TextField(max_length=500)
    rating=models.CharField(max_length=100)

    def __str__(self):
        return self.main_head