from django.db import models

class Player(models.Model):
    """
    The Player model represents a football player and has a single field, name,
    which is a character field to store the player's name.
    """

    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Team(models.Model):
    """
    The Team model represents a football team and has two fields, name and players.
    The name field is a character field to store the team's name,
    and the players field is a many-to-many relationship field
    that connects the team to multiple players.
    """

    name = models.CharField(max_length=255)
    players = models.ManyToManyField(Player)

    def __str__(self):
        return self.name

class Gamer(models.Model):
    username = models.CharField(max_length=255)
    score = models.IntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username