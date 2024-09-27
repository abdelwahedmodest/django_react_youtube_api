from django.contrib import admin

from .models import MediaUpload

@admin.register(MediaUpload)
class MediaUploadAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'keywords', 'hashtags', 'video', 'image')
    search_fields =('title', 'description', 'keywords', 'hashtags', 'video', 'image') 
    list_filter = ('title',)

