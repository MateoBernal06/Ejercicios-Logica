
// Testing --> proceso para validar que el texto funcione correctamente

//* Prueba unitaria --> permite evaluar un modulo individual del codigo

const suma = (a, b) =>{
    return a+b
}
console.log(suma(5,6)===11);


//* Pruebas de integracion


//* Pruebas end-to-end (E2E) --> prueba una interaccion real de la aplicacion

// jestjs.io es una libreria de que permite realizar test a una aplicacion

// Para poder usar test toca exportar de la siguiente manera
module.exports = suma
