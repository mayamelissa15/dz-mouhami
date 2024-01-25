"""
Django settings for DZ_Mouhami project.

Generated by 'django-admin startproject' using Django 5.0.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""
import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-26=abu(brxqpt5_sbhj(&4g^xoly9@f7r@b7*5$dqlmxjhe52^'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost' ,'127.0.0.1',"192.168.228.1","192.168.228.1.nip.io"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
    'rest_framework',
    "rest_framework.authtoken",
    "sslserver",
    'djoser',
    'debug_toolbar',
    'corsheaders',
    'oauth2_provider',
    'social_django',
    'drf_social_oauth2',
    'core',
    'drf_yasg'
]
CORS_ORIGIN_ALLOW_ALL = True
MIDDLEWARE = [
    'allauth.account.middleware.AccountMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
]
 
ROOT_URLCONF = 'DZ_Mouhami.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.request',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

WSGI_APPLICATION = 'DZ_Mouhami.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases
import pymysql
pymysql.install_as_MySQLdb()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'DZ_Mouhami_DB',
        'USER': 'avnadmin',
        'PASSWORD': 'AVNS_vXeEd-Miww6VsPvnWhc',
        'HOST': 'dz-mouhami-dz-mouhami.a.aivencloud.com',
        "PORT": "28133"
    }
}
# mysql --user avnadmin --password=AVNS_vXeEd-Miww6VsPvnWhc --host dz-mouhami-dz-mouhami.a.aivencloud.com --port 28133 DZ_Mouhami_DB
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'DZ_Mouhami_DB',
#         'USER': 'root',
#         'PASSWORD': 'teamproject2023',
#         'HOST': '127.0.0.1',
#         "PORT": "3306"
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media') 

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


AUTHENTICATION_BACKENDS = [
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by email
    'allauth.account.auth_backends.AuthenticationBackend',
    'social_core.backends.google.GoogleOAuth2',
    # drf-social-oauth2
    'drf_social_oauth2.backends.DjangoOAuth2',
    # Django
    'django.contrib.auth.backends.ModelBackend',
]
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = "159094331037-bh9moh5r16ogrug3f31c48v0vtsv4l70.apps.googleusercontent.com"
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = "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"

SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
]

SITE_ID = 1

# 159094331037-bh9moh5r16ogrug3f31c48v0vtsv4l70.apps.googleusercontent.com

# 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
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
GOOGLE_CLIENT_ID =  "159094331037-bh9moh5r16ogrug3f31c48v0vtsv4l70.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET = "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"
GOOGLE_TOKEN_URL = "https://www.googleapis.com/oauth2/v3/token"
GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"

SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'SCOPE': [
            'profile',
            'email',
        ],
        'AUTH_PARAMS': {
            'access_type': 'online',
        },
        'OAUTH_PKCE_ENABLED': True,
    }
}

LOGIN_REDIRECT_URL = 'http://127.0.0.1:8000/core/'
LOGOUT_REDIRECT_URL = 'http://127.0.0.1:8000/core/'

SOCIALACCOUNT_STORE_TOKENS = True 




EMAIL_HOST = "smtp.gmail.com"
EMAIL_HOST_USER = "anisbensmail250@gmail.com"
EMAIL_HOST_PASSWORD= 'tezylczlmgjdfdbj'#your email must have 2 step verification 
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'


REST_FRAMEWORK = {
    
    'DEFAULT_AUTHENTICATION_CLASSES': (
        
        # OAuth
        # 'oauth2_provider.ext.rest_framework.OAuth2Authentication',  # django-oauth-toolkit < 1.0.0
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',  # django-oauth-toolkit >= 1.0.0
        'drf_social_oauth2.authentication.SocialAuthentication',
    )
}


# curl -X POST -d "client_id=Oh72rPXEtDYfwGf6PrM6jZUq5lgUflUXSiWW0ljJ&client_secret=pbkdf2_sha256$720000$Doppj9USNcwfFjkUnLNhbB$Neu7FIoPsrJ6i5pS51/jTeqA3kTmzfZ4D5dxE/zKwiE=&grant_type=password&username=anis&password=anis4869" http://localhost:8000/auth/token