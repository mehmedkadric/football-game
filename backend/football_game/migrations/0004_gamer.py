# Generated by Django 3.2.16 on 2023-07-03 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('football_game', '0003_auto_20230703_2217'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gamer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=255)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
