# Generated by Django 3.0.1 on 2019-12-20 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('languages', '0003_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(blank=True, upload_to='profile_image'),
        ),
    ]
