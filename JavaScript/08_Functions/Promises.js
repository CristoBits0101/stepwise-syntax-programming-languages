function myAsynchronous(params) 
{
    // Code.
}

/**
 *  - Necesita 2 parámetros que respeten el orden de colocación. 
 *  - Cada parámetro es una función. 
 *  - Si siempre devuelve una resolución. 
 *  - De lo contrario, siempre devuelve un rechazo. 
 *  - Decide si un valor ingresado es válido o no. 
 */
const myPromise = new Promise((resolve, reject) => 
{
    const i = Math.floor(Math.random() * 2)
    
    if (i !== 0) 
    {
        resolve();
    } 
    
    else 
    {
        reject();
    }
});

// Entonces cuando es verdadero, atrapa cuando es falso y finalmente siempre.
myPromise
    .then 
    (
        ()    => console.log("correct execution")
    )
    .catch 
    (
        ()   => console.log("error execution")
    )
    .finally 
    (
        () => console.log("always runs me")
    )