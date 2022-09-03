from dotenv import load_dotenv

load_dotenv()

from os import environ

DJANGO_DEBUG = True if environ['DJANGO_DEBUG'] == 'True' else False
DJANGO_SECRET_KEY = environ['DJANGO_SECRET_KEY']
