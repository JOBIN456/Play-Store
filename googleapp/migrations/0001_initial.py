# Generated by Django 4.2 on 2024-03-06 15:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game_Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=1500)),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='media/')),
                ('small_image', models.ImageField(default=models.ImageField(upload_to='media/'), upload_to='media/')),
                ('vedio_code', models.CharField(max_length=400)),
                ('main_head', models.TextField(max_length=400)),
                ('sub_head', models.TextField(max_length=500)),
                ('rating', models.CharField(max_length=100)),
                ('category', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='googleapp.game_category')),
            ],
        ),
    ]
