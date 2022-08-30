(function(){
    
    // funcion NORMAL:
    const miFuncionN = function(a:string){
        return a.toUpperCase();
    }

    // funcion DE FLECHA:
    const miFuncionF = (a:string) => a.toUpperCase();
    
    const sumarN = function (a:number, b:number) {
        return a + b;
    }

    const sumarF = (a:number, b:number) => a + b;
    

    // console.log(sumarN(5,5));
    // console.log(sumarF(10,10));


    //============================================================
    
    // Las funciones de flecha no modifican a dónde apunta el "this", en cambio las normales si! y podrían dar problemas:

    //Ejemplo de flecha solamente:
    const hulk = {
        nombre:'Hulk',
        smash() {
            setTimeout( () => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000 ); // 1000 milisegundos espera y luego se ejecuta
        }
    }
    
hulk.smash();

    })();
    

