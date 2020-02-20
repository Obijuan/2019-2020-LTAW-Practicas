from django.db import models

class Producto(models.Model):
    """Modelo de datos de mis productos"""

    nombre = models.CharField(max_length=50)
    stock = models.IntegerField(default=0)
    precio = models.FloatField()

    # -- Usamos el nombre para identificar
    # -- el producto
    def __str__(self):
        return self.nombre
