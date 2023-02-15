animales = ['perro', 'gato', 'pez'] # Cada print es una línea de impresión.

print(*animales)                    # El multiplicador permite imprimir la lista completa sin reccorrerla en un bucle.

print(*animales, sep = ", ")        # Sep permite añadir caracteres entre los elementos de la lista.

print(*animales, end = ", ")        # End añade un elemento al final de la lista.

animales.insert(len(animales), 4)   # P1 posición, P2 Valor, no sobreescribe sino añade.

animales.append('pajaro')           # Añade un elemento al final de la lista.

animales.extend(['perro', 'gato'])  # Añade varios elementos al final de la lista.

animales.pop()                      # Elimina el último elemento de la lista.

animales.pop(2)                     # Elimina el tercer elemento de la lista.

del animales[2]                     # Elimina el tercer elemento de la lista.

for x in animales:                  # Imprimir la lista añadiendo saltos de línea mediante un bucle.
    print('animal:', x)