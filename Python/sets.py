my_list  = ['perro', 'gato', 'pez', 'gato']     # Colección de valores repetibles y mutables.
my_tuple = (1, 4.5, "hello", "hello")           # Coleccion de valores repetibles y inmutables.
my_set   = {'perro', 'gato', 'pez'}             # Colección de valores irrepetibles y mutables.

my_set2  = {1, 4.5, "hello", "hello"}       

my_set.union(my_set2)                           # Une los 2 sets y elimina los elementos repetidos.
print(my_set | my_set2)                         # Une los 2 sets y elimina los elementos repetidos.

my_set.intersection(my_set2)                    # Almacena los elementos repetidos de los 2 sets.
print(my_set & my_set2)                         # Almacena los elementos repetidos de los 2 sets.

my_set.difference(my_set2)                      # Descuenta del primer set los elementos repetidos.
print(my_set - my_set2)                         # Descuenta del primer set los elementos repetidos.

my_set.symmetric_difference(my_set2)            # Almacena en una lista los elementos no repetidos.
print(my_set ^ my_set2)                         # Almacena en una lista los elementos no repetidos.