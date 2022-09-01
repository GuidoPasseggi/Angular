"use strict";
(() => {
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
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
})();
