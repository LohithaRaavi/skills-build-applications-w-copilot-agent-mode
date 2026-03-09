from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        ironman = User.objects.create(email='ironman@marvel.com', name='Iron Man', team='Marvel', is_active=True)
        captain = User.objects.create(email='captain@marvel.com', name='Captain America', team='Marvel', is_active=True)
        batman = User.objects.create(email='batman@dc.com', name='Batman', team='DC', is_active=True)
        superman = User.objects.create(email='superman@dc.com', name='Superman', team='DC', is_active=True)

        # Create activities
        Activity.objects.create(user=ironman, type='Running', duration=30, date='2026-03-01')
        Activity.objects.create(user=batman, type='Cycling', duration=45, date='2026-03-02')
        Activity.objects.create(user=superman, type='Swimming', duration=60, date='2026-03-03')
        Activity.objects.create(user=captain, type='Walking', duration=20, date='2026-03-04')

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=100)
        Leaderboard.objects.create(team=dc, points=90)

        # Create workouts
        Workout.objects.create(name='Hero HIIT', description='High intensity interval training for heroes.', suggested_for='Marvel')
        Workout.objects.create(name='Super Strength', description='Strength workout for super humans.', suggested_for='DC')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data'))
