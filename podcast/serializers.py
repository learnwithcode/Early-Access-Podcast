from rest_framework import serializers
from .models import EmailList

#local import here.


class EmailListAPIViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailList
        fields = ['email', 'phone', 'pod_type']
