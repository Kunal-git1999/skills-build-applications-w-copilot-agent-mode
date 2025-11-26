from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIClient
from .models import Activity


User = get_user_model()


class TrackerModelTests(TestCase):
    def test_create_activity(self):
        user = User.objects.create_user(username='tester', password='pass')
        a = Activity.objects.create(user=user, activity_type='run', duration_minutes=30)
        self.assertEqual(str(a), 'tester run 30m')


class ActivityAPITests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='apiuser', password='pass')
        self.client = APIClient()

    def test_activity_list_requires_auth_for_create(self):
        # create activity without auth -> should fail on POST
        resp = self.client.post('/api/activities/', {'activity_type': 'run', 'duration_minutes': 10})
        self.assertIn(resp.status_code, (401, 403))

    def test_authenticated_create_and_list(self):
        self.client.login(username='apiuser', password='pass')
        post = self.client.post('/api/activities/', {'activity_type': 'bike', 'duration_minutes': 45})
        self.assertEqual(post.status_code, 201)
        list_resp = self.client.get('/api/activities/')
        self.assertEqual(list_resp.status_code, 200)
        self.assertGreaterEqual(len(list_resp.json()), 1)


class AuthTests(TestCase):
    def test_register_and_token(self):
        resp = self.client.post('/api/auth/register/', {'username': 'newuser', 'password': 'pw123'})
        self.assertEqual(resp.status_code, 200)
        data = resp.json()
        self.assertIn('access', data)
        self.assertIn('refresh', data)

    def test_token_auth_allows_create(self):
        # Register user first
        resp = self.client.post('/api/auth/register/', {'username': 'tokenuser', 'password': 'pw123'})
        token = resp.json().get('access')
        # Use token to create activity
        client = APIClient()
        client.credentials(HTTP_AUTHORIZATION='Bearer ' + token)
        post = client.post('/api/activities/', {'activity_type': 'run', 'duration_minutes': 10})
        self.assertEqual(post.status_code, 201)
