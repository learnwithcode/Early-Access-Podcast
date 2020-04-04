from django.db import models

# Create your models here.

class TimeStampBase(models.Model):
    '''
    This model is used as abstract, only classes
    that inherit from this class can used this class attribute. 
    '''
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class EmailList(TimeStampBase):
    PODCAST_TYPE = (
        (1, ("CONTAMINATION")),
        (2, ("SOCIAL")),
        (3, ("RELIGIOUS")),
        (4, ("OTHER")),
    )
    email = models.EmailField(unique=True, null=True, blank=True, help_text='Early Access Email User')
    phone = models.CharField(max_length=16, unique=True, null=True, blank=True, help_text='Early Access Phone')
    pod_type = models.IntegerField(choices=PODCAST_TYPE, 
                                                    default=1, 
                                                        blank=False, 
                                                            null=False,
                                                                help_text='Select a Podcast Type') 

    def __str__(self):
        return self.email