def sum_of(*args):  # Almacena un array de parámetros.
    sum = 0         # Almacena el valor de la suma.
    for i in args:  # Itera sobre cada parámetro.
        sum += i    # Suma los elementos del array.
    return sum      # Devuelve el resultado.

print(sum_of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))