""" SINTAXIS """
#      open (file_name, file_location, mode).
# with open (file_name, file_location, mode) as file: | cierra los ficheros de manera automática.

# with open (file_name, \users\..., mode) as file: | ruta relativa.
# with open (file_name, c:\users\..., mode) as file: | ruta absoluta.

""" FORMATO TEXTO """
# r  = abrir y leer en formato de texto.
# r+ = abrir, leer y escribir al final en formato de texto.
# w  = sobreescribir la línea en formato de texto.
# a  = editar o agregar texto.

""" FORMATO BINARIO """
# rb  = abrir y leer en formato binario.
# rb+ = abrir, leer y escribir al final en binario.
# wb  = sobreescribir en binario.
# ab  = editar o agregar en binario.

""" LEER LÍNEA Y CERRAR FICHERO """
file = open("archivo.txt", "r")                         # Guardamos el fichero y el modo en una variable.
data = file.readline()                                  # Leemos el primer linea del fichero.
print(data)                                             # Imprimimos la primera linea del fichero.
file.close()                                            # Cerramos el fichero.

""" LEER LÍNEA Y AUTO CERRAR FICHERO """
with open ("archivo.txt", "r") as file:
    data = file.readline()                              # Leemos el primer linea del fichero.
    print(data)                                         # Imprimimos la primera linea del fichero.
    
""" LEER LÍNEA Y AUTO CERRAR FICHERO """
with open ("archivo.txt", "r") as file:
    data = file.readline(1)                             # Podemos limitar la cantidad de caracteres a leer la línea.
    print(data)   

""" GUARDAR TODAS LAS LÌNEAS EN UN LISTA ORDENADA """
with open ("archivo.txt", "r") as file:
    lines = file.readlines()                             # Los 2 métodos sirven para guardar el fichero entero.
    lines = file.read()                                  # El archivo se imprime como está.
    lines = file.read(44)                                # Leer los primeros 44 carácteres.
    print(len(lines))   

    for line in lines:
        print(line)

""" CREAR, ESCRIBIR LÍNEA Y AUTOCERRAR """
try:
    with open ('archivo2.txt', 'w') as file:
        file.write('Se ha creado el nuevo fichero 2!')
        file.writelines(['línea 1 ', 'línea 2'])
        file.writelines(['\nlínea 3 ', '\nlínea 4'])    # Añadir salto de línea con \n.
except FileNotFoundError as e:                          # El tipo de excepción depende de si controlas el error o solo un mensaje de error.
    print('Error', e)

""" SALTO DE LÍNEA Y RANDOM PALABRAS"""
import random
f = open("petnames.txt", "r")
f_content = f.read()
f_content_list = f_content.split("\n")
print(random.choice(f_content_list))

import random
f_name = input('Type the file name: ')
f = open(f_name) # "r" omitted as it's the default
f_content = f.read()
f_content_list = f_content.split("\n")
print(random.choice(f_content_list))