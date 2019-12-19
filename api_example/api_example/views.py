import sys, os
sys.path.insert(0, os.path.abspath('..'))
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + "/..")
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
import json
from django.http import JsonResponse
from languages.models import *


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
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
def get_user_films(request):
    #print(request.data)
    json_req = json.load(request)
    #json_req = request.data
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
def auth(request):
    json_req = json.load(request)
    login = json_req["login"]
    password = json_req["password"]
    try:
        user = User.objects.filter(login__exact=login, password_exact=password).get()
    except:
        return JsonResponse({"success": False})
    return JsonResponse({"success": True})

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
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
def get_user_info(request):
    #print(request.data)
    json_req = json.load(request)
    #json_req = request.data
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
                         "films": resp_films,
                         "login": login,
                         "films_amount": len(films)})
    # resp["films"] = resp_films
    resp['Access-Control-Allow-Origin'] = '*'
    resp["Access-Control-Allow-Headers"] = '*'
    return resp