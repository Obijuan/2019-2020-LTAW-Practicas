from django.contrib import admin
from django.urls import include, path

# -- Recursos de mi proyecto web

urlpatterns = [
    # -- Esta es la URL de mi tienda
    path('mi_tienda/', include('mi_tienda.urls')),

    # -- URL de administracion (por defecto en django)
    path('admin/', admin.site.urls),
]
