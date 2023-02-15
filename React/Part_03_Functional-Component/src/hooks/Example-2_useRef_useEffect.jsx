/**
 *  - useState: Para modificar los estados de los componentes.
 *  - useRef: Sirve para referenciar elementos dentro de la vista.
 *  - useEffect Controla los cambios en la vista y el ciclo de vida de los componentes.
 */

// Paso 1)
// - Traerse los hooks.
import { useState, useRef, useEffect } from "react";
import React from 'react';

// Paso 2)
// - Crear un componente rfc
const Example2UseRefUseEffect = () => {

    // Paso 3)
    // Se va a crear 2 contadores con estados independientes.
    // Se inicializa en 0 el contador sin variables intermediarias.
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Paso 4)
    // Crear una referencia con useRef() para asociar una variable.
    // Con un elemento del DOM del componente (vista HTML).
    // UseRef es como getElementById pero simplificado.
    const miReferencia = useRef();

    return (
        <div>
            
        </div>
    );
}

export default Example2UseRefUseEffect;
