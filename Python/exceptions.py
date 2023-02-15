# Las excepciones se utilizan para controlar errores en el código y que no se caiga el programa.
# Los errores se generan porque el programa intenta dividir por cero o porque no se encuentra un archivo, etc...
def divide(params1, params2):
    return params1 / params2

# Divide los parámetros por cero.
try:
    print(divide(40, 0,))
except Exception as e:
    print('El error es causado por: ', e)
    print(e.__class__)

# No existe el indice.
try:
    items = [1, 2, 3]
    item = items[6]
    print(item)
except: 
    print("The index does not exist in the list.")

# No existe el archivo.
try:
    with open('file_does_not_exist.txt', 'r') as file:
        print(file.read())
except:
    print("Unable to locate file")  