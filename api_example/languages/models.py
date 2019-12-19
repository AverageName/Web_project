from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.


class Language(models.Model):
    name = models.CharField(max_length=50)


class Film(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)


class User(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50, default='')

class FilmUser(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[
                                    MaxValueValidator(10),
                                    MinValueValidator(1)
                                    ]
    )

