from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.


class Language(models.Model):
    name = models.CharField(max_length=50)


class Film(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class User(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50, default='')
    #profile_pic = models.ImageField(upload_to='profile_picture')

    def __str__(self):
        return self.login


class FilmUser(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[
                                    MaxValueValidator(10),
                                    MinValueValidator(1)
                                    ]
    )

