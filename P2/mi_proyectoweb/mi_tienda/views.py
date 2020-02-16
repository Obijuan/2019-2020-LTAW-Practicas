from django.http import HttpResponse
from django.template import Template, Context
from django.shortcuts import render
from random import randint

# -- Vista principal de mi tienda
# -- El nombre de la vista puede ser cualquiera. Nosotros lo hemos
# -- llamado index, pero se podría haber llamado pepito
def index(request):
    return HttpResponse("Hola! esta es la página principal de Mi tienda!")

# -- Ejemplo de generacion a partir de cadenas con código html
def test1(request):

    # -- Obtener el número aleatorio
    numero = randint(0, 100)

    # Párrafo a insertar
    P = "<p>Numero aleatorio: " + str(numero) + " </p>"

    PAGINA_INI = """
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Test1</title>
      </head>
      <body>
        <h1>TEST1</h1>
    """

    PAGINA_FIN = """
      </body>
    </html>
    """
    return HttpResponse(PAGINA_INI + P + PAGINA_FIN)

# -- Ejemplo de generacion mediante una plantilla en el código
def test2(request):

    # -- Obtener el número aleatorio
    numero = randint(0, 100)

    PLANTILLA = """
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Test2</title>
      </head>
      <body>
        <h1>TEST2</h1>
        <p> Numero aleatorio:  {{numero}} </p>
      </body>
    </html>
    """

    # --Procesar la plantilla
    t = Template(PLANTILLA)

    # -- Crear el contexto: Asignar el numero
    c = Context({'numero': str(numero)})

    # -- Obtener la pagina html final
    html = t.render(c)

    return HttpResponse(html)
