(()=>{
    
// INTERFACE: es similar a una clase, pero "tonta". No se puede definir qué va a hacer, no tiene constructores.
// Unicamente son las reglas que queremos que cumpla un objeto para que lo podamos utilizar como un tipo de dato "tonto".
// NO HAY REPRESENTACION EN JS (pero sigue siendo util)
// Sirve para "poner reglas" y asegurarnos que debemos cumplirlas
// Ej.: Habrá un objeto con esas propiedades:
interface Xmen {
        nombre: string;
        edad: number;
        poder?: string; //<--- poder es opcional por el "?"
    }

    // sin INTERFACE: const enviarMision = (xmen: {nombre: string})
    //con INTERFACE:
    const enviarMision = (xmen: Xmen) => { 
        //(xmen: {nombre: string} <--- le indicamos que es un objeto que por lo menos tiene un nombre y del tipo string
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

    const regresarAlCuartel = (xmen: Xmen) => { 
        console.log(`Enviando a ${xmen.nombre} al cuartel`);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();