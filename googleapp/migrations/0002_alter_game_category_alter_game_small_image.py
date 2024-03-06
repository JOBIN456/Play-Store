# Generated by Django 4.2 on 2024-03-06 16:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('googleapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='googleapp.game_category'),
        ),
        migrations.AlterField(
            model_name='game',
            name='small_image',
            field=models.ImageField(blank=True, null=True, upload_to='media/'),
        ),
    ]
