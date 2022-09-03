# soundtionary

A game where you guess the sound with friends!

## Setup

```bash
# install pipenv if you haven't have it 
pip install pipenv

# clone the repo
git clone https://github.com/LrnzDC3696/soundtionary.git

# cd to the repo
cd soundtionary

# [developer only] If you are developer you need to install dependencies for developers
pipenv install --dev

# If you're not a developer just install required dependencies like this
pipenv install

# Activate the Pipenv shell
pipenv shell

# Before we run the bot we need to create .env file where all secret keys will be (tokens etc)
# Create it
touch .env

# Edit it and change the keys to your values (see section below for sample layout)
nano .env
```

Sample layout of `.env` file
```bash
DJANGO_SECRET_KEY='your key here'
DEBUG='0'
```

Every thing in the .env file is required to exist to avoid forgetting setup.
`SECRET_KEY` Used by the django as a key to securing signed data
`DEBUG` Used to tell if the code is in local or on hosting. Set it to "True" if you want it to be true and anything else if not.
