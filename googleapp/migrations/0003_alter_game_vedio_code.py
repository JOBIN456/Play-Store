# Generated by Django 4.2 on 2024-03-06 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('googleapp', '0002_alter_game_category_alter_game_small_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='vedio_code',
            field=models.URLField(max_length=400),
        ),
    ]
