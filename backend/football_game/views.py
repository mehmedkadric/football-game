import json
import random
from random import randint

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *
from django.http import JsonResponse


class PlayerView(APIView):
    def get(self, request):
        output = [{"name": output.name}
                  for output in Player.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class TeamView(APIView):
    def get(self, request):
        output = [{"name": output.name,
                   "department": output.players}
                  for output in Team.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = TeamSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class GamerView(APIView):
    def get(self, request):
        output = {}
        return Response(output)

    def post(self, request):
        serializer = GamerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            exists = Gamer.objects.filter(username=request.data['username']).exists()
            if not exists:
                serializer.save()
            return Response(serializer.data)

def insert_data():
    try:
        with open('/Users/mehmed/Desktop/football_game/data/new.json') as f:
            data = json.load(f)
            print("Ehh")
            for player_name, team_names in data.items():
                player, _ = Player.objects.get_or_create(name=player_name)
                print(player_name)
                for team_name in team_names:
                    team, _ = Team.objects.get_or_create(name=team_name)
                    team.players.add(player)

        return JsonResponse({'message': 'Data inserted successfully'})
    except Exception as e:
        print("Err", e)
        return JsonResponse({'error': str(e)})
def check_username_availability(request):
    username = request.GET.get('username', '')
    exists = Gamer.objects.filter(username=username).exists()

    context = {
        'error': False,
        'message': '',
    }

    if len(username) < 1 or len(username) > 255:
        context['error'] = True
        context['message'] = 'Username must be between 1 and 255 characters'
        return JsonResponse(context)

    if exists:
        context['error'] = True
        context['message'] = 'Username already exists'

    return JsonResponse(context)

def get_question(request):
    username = request.GET.get('username', '')
    count = Player.objects.count()
    random_player = Player.objects.all()[randint(0, count - 1)]
    options = {random_player.name}

    # Append the options
    while len(options) < 4:
        options.add(Player.objects.all()[randint(0, count - 1)].name)

    options = list(options)
    random.shuffle(options)

    career = Team.objects.filter(players=random_player)

    career = ", ".join([team.name for team in career])
    context = {
        'question': 'Which player has the following career: ' + career,
        'options': options,
        'correct_option': random_player.name
    }
    return JsonResponse(context)


def leaderboard(request):
    gamers = Gamer.objects.order_by('-score', 'date_created')[:10]
    print(len(gamers))
    data = []
    for gamer in gamers:
        data.append({
            'id': gamer.id,
            'username': gamer.username,
            'score': gamer.score,
            'date_created': gamer.date_created.strftime("%B %d, %Y, %H:%M:%S")
        })
    return JsonResponse(data, safe=False)