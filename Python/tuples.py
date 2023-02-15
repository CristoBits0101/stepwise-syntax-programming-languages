my_tuple = (1, 4.5, "hello")    # Los valores que contiene la tupla no se pueden modificar con métodos.

print(my_tuple.count("hello"))  # Encuentra la posición de un elemento en la tupla.

print(my_tuple.index(4.5))      # Encuentra la posición del primer elemento con ese valor en la tupla.

for x in my_tuple:              # Recorrer la tupla.
    print(x)

print(my_tuple[3])              # Imprime el elemento en la posición especificada.