
//* Try - catch
let mensaje

//Esrtuctura (try-catch)
try {
    //Lo que se intenta hacer
} catch (error) {
    //lo que se ejecuta si se produce un error
}finally{
    //Se va ejecutar siempre
}

//?Captura de error
try{
    //Lo que se intenta ejecutar
    console.log(mensaje.saludo)
    console.log("ejecutado con exito")
}
catch(error){
    //Lo que se ejecuta si se produce un error
    console.log(`se produjo un error, ${error.message}`)
}
finally{
    console.log('Fin de la ejecucion')
}

//* throw --> Permite lanzar un error si el usuario asi lo desea
//Estructura (throw)
/*throw new Error("Mansaje");*/

//? Lanzamiento de errores (throw) 
//throw new Error("Se ha producido un error");
//Error
//TypeError


//* Creacion de excepciones personalizadas
/*class myError extends Error{
    constructor (message, a, b){
        super(message)
        this.a = a
        this.b = b
    }

    suma(){
        console.log(this.a+this.b)
    }
}*/


