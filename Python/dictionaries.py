my_dict = {}                                    # Declaración de un diccionario vacío.

my_dict = {1: 'Coffee', 2: 'Tea', 3: 'Water'}   # Array asociativo de clave y valor.

my_dict[1] = 'Juice'                            # Sobreescribimos el valor de la clave.

del my_dict[1]                                  # Elimina un artículo del diccionario.

for key, value in my_dict.items():
    print(key + ': ' + value)

# Diccionario original
d = {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Comprensión de diccionario.
# Aquí utilizamos una comprensión de diccionarios para filtrar los elementos del diccionario 'd' cuyo valor es mayor a 2 y almacenarlos en un nuevo diccionario.
d_compressed = {k: v for k, v in d.items() if v > 2}

# Imprimimos el diccionario comprimido
print(d_compressed)

# Output: {'c': 3, 'd': 4}

"""
La comprensión de diccionarios funciona de la siguiente manera: utiliza la sintaxis {key_expression: value_expression for element in iterable} 
para crear un nuevo diccionario a partir de los elementos de un iterable, en este caso el método items() del diccionario d.

En el código anterior, la clave y el valor se definen como k y v, respectivamente, y la expresión condicional if v > 2 
filtra los elementos cuyo valor es mayor a 2. Estos elementos filtrados se asignan al nuevo diccionario d_compressed. 
Finalmente, se imprime el contenido de d_compressed.
"""