// Depuracion --> consiste en la deteccion de errores

//? Console.log 
// Manera basica de ver errores durante la ejecucion

const suma =(a, b)=>{
    console.log(a);
    console.log(b);
    return a + b
}
suma(3, '8')

//? Depuracion

const division = (a, b) =>{
    if(b===0){
        throw Error('No se puede dividir por 0')
    }
    console.log(a/b);
}

//division(5,0);

