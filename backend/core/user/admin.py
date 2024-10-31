from django.contrib import admin
from .models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    # Afficher les champs dans la liste d'objets
    list_display = ('name', 'profession', 'status', 'location')
    
    # Ajout d'une barre de recherche
    search_fields = ('name', 'profession', 'location')
    
    # Filtrer par statut
    list_filter = ('status', 'location')
    
    # Afficher le formulaire en séparant les champs en sections
    fieldsets = (
        ('Personal Info', {
            'fields': ('name', 'profession', 'status', 'location')
        }),
        ('Image', {
            'fields': ('image',)
        }),
    )

# Enregistrer le modèle dans l'admin
admin.site.register(UserProfile, UserProfileAdmin)

