"use strict";
(() => {
    // // 1) Uso de Let y Const
    // //// Respuesta Guido ya aplicada (antes eran todos var):
    // const nombre = 'Ricardo Tapia';
    // const edad = 23;
    // const PERSONAJE = {
    //   nombre: nombre,
    //   edad: edad
    // };
    // // 2) Cree una interfaz que sirva para validar el siguiente objeto
    // //// Respuesta:
    // interface Super {
    //   nombre: string;
    //   artesMarciales: object;
    // }
    // let batman: Super = {
    //   nombre: 'Bruno Díaz',
    //   artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    // }
    // // 3) Convertir esta funcion a una funcion de flecha
    // // function resultadoDoble( a, b ){
    // //   return (a + b) * 2
    // // }
    // //// Respuesta Guido:
    // const resultadoDoble = (a:number,b:number):number => (a+b)*2
    // // Función con parametros obligatorios, opcionales y por defecto
    // // donde NOMBRE = obligatorio
    // //       PODER  = opcional
    // //       ARMA   = por defecto = 'arco'
    // //// Linea original sin resolver:
    // // function getAvenger( nombre, poder, arma){
    // //// Respuesta Guido:
    // function getAvenger( nombre:string, poder?:string, arma:string ='arco' ){
    //   var mensaje;
    //   if( poder ){
    //     mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    //   }else{
    //     mensaje = nombre + ' tiene un ' + poder
    //   }
    // };
    // // Cree una clase que permita manejar la siguiente estructura
    // // La clase se debe de llamar rectangulo,
    // // debe de tener dos propiedades:
    // //   * base
    // //   * altura
    // // También un método que calcule el área  =  base * altura,
    // // ese método debe de retornar un numero.
    // // Respuesta Guido:
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
    }
    const rectangulo1 = new Rectangulo(10, 10);
    console.log(rectangulo1);
    const calcularArea = (base, altura) => (base * altura);
    console.log(calcularArea(rectangulo1.altura, rectangulo1.base));
})();
