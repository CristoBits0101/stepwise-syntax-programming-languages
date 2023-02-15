def sum_of(**kwargs):           # define una función que recibe un número variable de argumentos clave-valor
    sum = 0                     # inicializa una variable para almacenar la suma
    for x, i in kwargs.items(): # itera sobre cada par clave-valor en el diccionario kwargs
        sum += i                # suma el valor correspondiente a cada clave en el diccionario
    return sum                  # devuelve el resultado de la suma

print(sum_of(coffee=3.99, cake=8.99, juice=1)) # imprime el resultado de la suma de los valores en los argumentos clave-valor