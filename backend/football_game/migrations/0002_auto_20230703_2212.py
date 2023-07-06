# Generated by Django 3.2.16 on 2023-07-03 22:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('football_game', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='players',
        ),
        migrations.CreateModel(
            name='PlayerTeam',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='football_game.player')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='football_game.team')),
            ],
        ),
    ]
