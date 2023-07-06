from rest_framework import serializers
from . models import  *

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['name']

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['name', 'players']

class GamerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gamer
        fields = ['username', 'score']