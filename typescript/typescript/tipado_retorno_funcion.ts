(()=>{

    // IMPORTANTE!!!: Todo esto no es código que tenga mucho sentido,
    // pero es un buen machete para entender cuándo y cómo
    // especificar el tipo de dato que debe devolver una función

    // Notar el "):number" antes de la funcón de flecha:
    const sumar = (a: number,b: number):number => {
        return a + b;
    }
    // Idem acá:
    const nombre = ():string => 'Hola Fernando';
    
    //Notar que le especificamos también que retornará una promesa y que será del tipo string (PERO ENTRE "<>")
    //de esa manera al hacer el console.log de obtenerSalario, typescript puede inferir que "a" es del tipo "string"
    const obtenerSalario = ():Promise<string> => {
        
        return new Promise( (resolve, reject) => {
            resolve('Fernando');
        });
    }
    
    obtenerSalario().then(a => console.log(a.toUpperCase)

})();