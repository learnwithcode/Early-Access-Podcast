from rest_framework.response import Response
from rest_framework.generics import (
    CreateAPIView, 
    )
from rest_framework import status

#Local Import her
from .serializers import (
    EmailListAPIViewSerializer,
    )

from.models import EmailList

'''
Email Create api view.
'''
class EmailListCreateAPIView(CreateAPIView):
    queryset = EmailList.objects.all()
    serializer_class = EmailListAPIViewSerializer