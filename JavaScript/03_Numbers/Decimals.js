// Declaración.
let a = 1;
let b = 0.111111;
let c = 9.2323;

/**
 *  - Siempre hay que redondear las operaciones con decimales.
 *  - La cantidad de ceros que imprimen falla.
 */
console.log(Math.round(a + b));
console.log(Math.round(a - b));

// Limite los decimales a 2, convierta a cadena y agregue 2 decimales si no tiene decimales.
console.log(c.toFixed(2));

// Limita un recuento por la longitud de la cadena de tipo de números.
console.log(c.toPrecision(3));