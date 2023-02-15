# Definimos la clase
class Recipe():
    # El método __new__ crea una nueva instancia de la clase
    def __new__(cls: type[self]) -> self:
        # Llamamos al método __new__ de la clase padre para crear una nueva instancia
        return super().__new__(cls)

    # El método __init__ inicializa la instancia de la clase
    def __init__(self) -> None:
        # Este método no tiene acciones, simplemente pasa
        pass

# Creamos una nueva instancia de la clase
new_recipe = Recipe()

# Verificamos que la nueva instancia sea una Recipe
print(isinstance(new_recipe, Recipe)) # Salida: True

"""
Este código define una clase llamada Recipe en Python. La clase Recipe contiene dos métodos especiales, __new__ y __init__.

__new__ es un método estático que se llama antes de __init__ y se usa para crear una nueva instancia de una clase. 

En este caso, el método __new__ no hace nada y simplemente devuelve una nueva instancia de la clase.

__init__ es un método de inicialización que se llama después de que se ha creado una nueva instancia de la clase. 

En este caso, el método __init__ no tiene ninguna acción y simplemente pasa.

La sintaxis utilizada en ambos métodos es la sintaxis de tipos de Python, que se introdujo en Python 3.5 y permite especificar los tipos de los parámetros y valores de retorno. 

Sin embargo, en este caso, la especificación de tipos no agrega ningún valor real ya que el método __new__ no utiliza ningún argumento y el método __init__ no devuelve nada.

En resumen, esta clase Recipe no hace nada útil y se utiliza principalmente como un ejemplo de código vacío.
"""

"""
Esta línea de código es la definición del argumento y el tipo de retorno del método __new__ en la clase Recipe.

El argumento cls es una variable que almacena la clase actual (en este caso, Recipe). type[self] es el tipo del argumento cls y se utiliza para especificar que cls es de tipo type y contiene la clase self.

El tipo de retorno -> self especifica que el método __new__ devolverá una instancia de la clase actual (en este caso, Recipe).

En resumen, el método __new__ recibe como argumento la clase actual (cls) y devuelve una nueva instancia de esa clase.
"""