from django.contrib import admin
from .models import Language, Film, User, FilmUser

admin.site.register(Language)
admin.site.register(Film)
admin.site.register(FilmUser)
admin.site.register(User)