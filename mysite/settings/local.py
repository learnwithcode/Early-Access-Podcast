from .base import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# SMTP ====================================================================================================================================================
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'akswefour@gmail.com'
EMAIL_HOST_PASSWORD = 'lxmhxneskvtgubgq'
EMAIL_PORT = 587
EMAIL_USE_TLS = True

#SSL ======================================================================================================================================================
CORS_REPLACE_HTTPS_REFERER      = False
HOST_SCHEME                     = "http://"
SECURE_PROXY_SSL_HEADER         = None
SECURE_SSL_REDIRECT             = False
SESSION_COOKIE_SECURE           = False
CSRF_COOKIE_SECURE              = False
SECURE_HSTS_SECONDS             = None
SECURE_HSTS_INCLUDE_SUBDOMAINS  = False
SECURE_FRAME_DENY               = False