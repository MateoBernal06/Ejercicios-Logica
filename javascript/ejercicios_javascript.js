
//! ejercicio 1

/*Si enumeramos todos los números naturales menores que 10 que son múltiplos de 3 ó 5, obtenemos 3, 5, 6 y 9.
La suma de estos múltiplos es 23. La suma de estos múltiplos es 23.
Hallar la suma de todos los múltiplos de 3 ó 5 por debajo del número del valor del parámetro proporcionado.*/ 


function suma_multiplos(num){
    let suma=0;
    for(let i=1;i<num;i++){
        if(i%3==0||i%5==0){
            suma=suma+i
        }
    }
    return suma;
}
//console.log(suma_multiplos(1000))


//! ejercico 2
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function numeros(){
    for(let i=1; i<=100; i++){

        if(i%3==0 && i%5==0){
            console.log('fizzbuzz')
        }
        else if(i%3==0){
            console.log('fizz')
        }
        else if(i%5==0){
            console.log('buzz')
        }
        else{
            console.log(i)
        }
    }
}


//! ejercicio 3
