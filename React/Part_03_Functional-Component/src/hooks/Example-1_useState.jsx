/** 
 *  - El objetivo es crear un componente de tipo función.
 *  - Acceder a su estado privado con el hook y modificarlo.
 *  - Se va a crear un estado para un contador y una persona.
 *  - Queremos que sean parte del estado del componente para gestionar sus cambios.
 *  - De esta manera los cambios se reflejan en la vista.
 */

// Paso 1)
// - El React se importa solo por defecto.
// - Los hooks hay que importarlos.
import React, { useState } from 'react';

const Example1UseState = () => {

    // Paso 2) 
    // - Declarar un valor inicial para el estado del componente primitivo.
    // - Declarar un valor inicial para el estado del componente objeto.
    // - Habra un estado númerico primitivo para el contador.
    // - Habra un estado de atributos del objeto para la persona.
    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Cristo',
        email: 'cristo@gmail.com'
    }

    // Paso 3)
    // - Crear un modificador de estado númerico para el componente primitivo.
    // - Crear un modificador de estado para los atributos del componente objeto.
    // - La estructura del useState es: 
    /**
     *  var o let o const [
     *      * nombre para el componente nuevo al que le añadimos un valor inicial. 
     *      * nombre para la función nueva que actualiza el estado del componente.
     *  ] = nombre del hook con el que vamos a trabajar(valor inicial que asignamos al componente);
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    // Paso 4)
    // - Crear 2 funciones que actualize el estado privado de los componente.
    // - Llamar a la función que actualiza el estado de los componente.
    // - Asignar el nuevo estado al componente.
    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona({
            nombre: 'Rubén',
            email: 'ruben@gmail.com'
        })
    }

    // Paso 5)
    // - Añadir el estado de los componente como retorno para poder representar los estados.
    // - Añadir 2 botones para poder modificar el estado de los componentes mediante un evento.
    // - Los botones llaman a funciones que actualizan el estado de los componentes mediante otra función.
    // - Más adelante pasaremos datos a los padres mediante props.
    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Nombre: {persona.nombre}</h2>
            <h2>E-mail: {persona.email}</h2>
            {/*Si la llamada en la función a la función se le pone los parentesis esto haría que se ejecutara*/}
                {/*onClick={incrementarContador()}*/}
            {/*Si se le fuera a pasar parametros el código debería ir entre comillas y no entre llaves.*/}
                {/*onClick='incrementarContador(parametros)'*/}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

// Exportación del componente para poder usarlo.
export default Example1UseState;
