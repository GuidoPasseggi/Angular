(function(){

  function getEdad() {
    return 100 + 100 + 300;
  }

  const nombre = "Fernando";
  const apellido = "Herrera";
  const edad = 33;

  // const salida = nombre + apellido + edad;
  
  // usemos un 'Template literal' para evitar
  // tener que hacer concatenaciones con
  // espacios y demases como en JS (ES5)
  const salida = `
    ${ nombre }
    ${ apellido }
    (${ getEdad()})`;
// Fernando Herrera (Edad: 33)

// OJO!!! Al hace console.log podremos notar que muestra el objeto con espacios y tabulaciones incluso!!!!!!!!!!!!!!
console.log( salida );

})();


