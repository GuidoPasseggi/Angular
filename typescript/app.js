"use strict";
(() => {
    // Es un tema bastante grande.
    // Nos sirven para ejecutar el codigo sin bloquear el codigo de nuestra aplicación
    //// ATENCION!!! para poder usar este código, hay que modificar el tsconfig.json de ES5 a ES6
    //// porque el ES5 no tiene ninguna manera de utilizar "Promise" 
    //// (en Angular no hará falta cambiar el .json)
    console.log('Inicio');
    // adentro de la Promise necesito agregar una function que reciba 2 argumentos:
    // resolve es lo que  nosotros vamos a retornar cuando todo funciona correctamente (prom1.THEN)
    // reject es lo que retornará cuando dé error (prom1.CATCH)
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Se terminó el TimeOut');
            reject('Se terminó el TimeOut');
        }, 1000);
    });
    //resolve <--> then
    //reject <--> catch
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    console.log('Fin');
})();
