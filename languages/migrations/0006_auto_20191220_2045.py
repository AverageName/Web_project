# Generated by Django 3.0.1 on 2019-12-20 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('languages', '0005_auto_20191220_1959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(upload_to='profile_picture'),
        ),
    ]