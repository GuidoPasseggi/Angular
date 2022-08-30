(function(){

    function activar( quien : string,                // 1ero OBLIGATORIOS   
                      momento?: string,                // 2do Opcionales (con ?)
                      objeto: string = 'batiseñal') {  // 3ero POR DEFECTO (el objeto por defecto aqui es "batiseñal")
                    if (momento){
                      console.log(`${quien} activó la ${objeto} en la ${momento}.`);
                    } else {
                      console.log(`${quien} activó la ${objeto}.`);
                    }}
    
    activar('Gordon','tarde'); // como 'momento' es OPCIONAL, no me tira error y considera que 'tarde' es el 'objeto' 
                                //[se saltea 'momento'])
    
    })();
    

