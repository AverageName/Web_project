import sys, os
sys.path.insert(0, os.path.abspath('..'))
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + "/..")
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
import json
from django.http import JsonResponse
from languages.models import *
from languages.forms import *
from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication


class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return None


def index(request):
    return render(request, "index.html")


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
@authentication_classes((CsrfExemptSessionAuthentication,))
def method(request):
    json_req = json.load(request)
    sth = json_req["sth"]

    # name = Language.objects.

    resp = JsonResponse({
        "sth": sth,
        "success": True
    })

    resp['Access-Control-Allow-Origin'] = '*'
    resp["Access-Control-Allow-Headers"] = '*'
    return resp


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
@authentication_classes((CsrfExemptSessionAuthentication,))
def get_user_films(request):
    json_req = json.load(request)
    login = json_req["login"]
    try:
        user = User.objects.filter(login=login).get()
    except:
        return JsonResponse({"success": False})
    filmusers = FilmUser.objects.filter(user__exact=user)
    films = [(filmuser.rating, filmuser.film) for filmuser in filmusers]
    resp_films = []
    for rating, film in films:
        resp_films.append({"title": film.title,
                           "description": film.description,
                           "language": film.language.name,
                           "rating": rating})
    resp = JsonResponse({"success": True,
                         "films": resp_films})
    # resp["films"] = resp_films
    resp['Access-Control-Allow-Origin'] = '*'
    resp["Access-Control-Allow-Headers"] = '*'
    return resp


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
@authentication_classes((CsrfExemptSessionAuthentication,))
def auth(request):
    json_req = json.load(request)
    login = json_req["login"]
    password = json_req["password"]
    try:
        user = User.objects.get(login=login, password=password)
    except:
        return JsonResponse({"success": False})
    return JsonResponse({"success": True})


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
@authentication_classes((CsrfExemptSessionAuthentication,))
def registrate(request):
    json_req = json.load(request)
    login = json_req["login"]
    password = json_req["password"]
    email = json_req["email"]
    exists = User.objects.filter(login__exact=login).exists()
    if exists:
        return JsonResponse({"success": False})
    new_user = User(login=login, password=password, email=email)
    new_user.save()
    return JsonResponse({"success": True})


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
@authentication_classes((CsrfExemptSessionAuthentication,))
def get_user_info(request):
    json_req = json.load(request)
    login = json_req["login"]
    try:
        user = User.objects.get(login=login)
    except:
        return JsonResponse({"success": False})
    filmusers = FilmUser.objects.filter(user__exact=user)
    films = [(filmuser.rating, filmuser.film) for filmuser in filmusers]
    resp_films = []
    for rating, film in films:
        resp_films.append({"title": film.title,
                           "description": film.description,
                           "language": film.language.name,
                           "rating": rating})
    resp = JsonResponse({"success": True,
                         "films": resp_films,
                         "login": login,
                         "films_amount": len(films)})
    # resp["films"] = resp_films
    resp['Access-Control-Allow-Origin'] = '*'
    resp["Access-Control-Allow-Headers"] = '*'
    return resp


#@csrf_exempt
#@api_view(["POST"])
#@permission_classes((AllowAny,))
#@authentication_classes((CsrfExemptSessionAuthentication,))
#def load_image(request):
#    print(request.data)
#    json_req = json.load(request)
#    login = json_req["login"]
#    img = json_req["base64_img"]
#    user = User.objects.get(login=login)
    #format, imgstr = img.split(';base64,')
    #data = ContentFile(base64.b64decode(imgstr))
#    user.profile_pic = img
#    user.save()
#    return JsonResponse({"success": True})


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
@authentication_classes((CsrfExemptSessionAuthentication,))
def user_rate_film(request):
    json_req = json.load(request)
    login = json_req["login"]
    film_title = json_req["film_title"]
    film_exists = Film.objects.get(title=film_title).exists()
    if film_exists:
        film = Film.objects.get(title=film_title)
    else:
        return JsonResponse({"success": False,
                             "error": "No such film"})
    user = User.objects.get(login=login)
    filmuser = FilmUser(film=film, user=user, rating=json_req["rating"])
    filmuser.save()
    return JsonResponse({"success": True})
