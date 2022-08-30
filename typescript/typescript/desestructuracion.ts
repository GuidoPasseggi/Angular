
//// LA DESESTRUCTURACIÓN: nos sirve para extraer datos de objetos y arreglos

(()=>{
const avenger = {
    nombre: 'Steve',
    clave: 'Capitán America',
    poder: 'Súper Fuerza'
}

const extraer = ( {nombre, poder}: any  ) => {
    // const {nombre, poder} = avenger;
    console.log(nombre);
    console.log(poder);
}


// extraer (avenger);

//// Ej. "ARREGLO" (llaves cuadradas []):
const avengers: string[] = ['Thor','Ironman','Spiderman']; 

// const [loki, hombre, arana] = avengers;
//// solo traer la 3era:
const [ , , arana] = avengers;


// console.log(loki);
// console.log(hombre);
// console.log(arana);

// console.log(avengers[0]);
// console.log(avengers[1]);
// console.log(avengers[2]);

// const extraerArr = (avengers:string[]) => {
//     console.log(avengers[0]);
//     console.log(avengers[1]);
//     console.log(avengers[2]);
// }


const extraerArr = ([thor, ironman, spiderman]:string[]) => {
    console.log(thor);
    console.log(ironman); 
    console.log(spiderman);
}

extraerArr(avengers);

})();