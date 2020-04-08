from rest_framework.response import Response
from rest_framework.generics import (
    CreateAPIView, 
    )
from rest_framework import status
from django.core.mail import send_mail


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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer) 
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, 
                                    headers=headers, 
                                            status=status.HTTP_201_CREATED) 