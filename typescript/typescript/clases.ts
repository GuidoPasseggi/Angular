(()=>{

// Son soportadas en ES6
// Primera letra capitalizada/mayuscula!

//// Sin simplificar:
// class Avenger {
//     nombre: string;
//     equipo: string;
//     nombreReal?: string;
//     puedePelear: boolean;
//     peleasGanadas: number;

//     constructor(nombre: string, equipo: string){
//         this.nombre = nombre;
//         this.equipo = equipo;
//     }
// }

// Simplificado:
class Avenger {
//"public" se declara para poder usarla dentro o fuera del constructor ("private" es el opuesto)
    constructor(public nombre: string,
                public equipo: string,
                public nombreReal?: string,
                public puedePelear?: boolean = true,
                public peleasGanadas?: number = 0){}
    
}


const antman: Avenger = new Avenger('Antman','Capi');

console.log(antman);




})();