from django.contrib import admin
from django.contrib.auth.models import User, Group
# Register your models here.
from .models import EmailList

admin.site.site_header = 'PODCAST'
admin.site.site_title = 'PODCAST'
admin.site.index_title = 'site administration'

@admin.register(EmailList)
class EmailListAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'phone', 'pod_type', 'created', 'updated'] 
    list_filter = ['pod_type', 'email', 'phone']
    search_fields = ['phone', 'email']
    date_hierarchy = 'created'

admin.site.unregister(User)   
admin.site.unregister(Group)  