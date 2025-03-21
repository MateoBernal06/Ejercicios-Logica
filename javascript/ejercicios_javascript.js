
//! ejercicio 1

/*Si enumeramos todos los números naturales menores que 10 que son múltiplos de 3 ó 5, obtenemos 3, 5, 6 y 9.
La suma de estos múltiplos es 23. La suma de estos múltiplos es 23.
Hallar la suma de todos los múltiplos de 3 ó 5 por debajo del número del valor del parámetro proporcionado.*/ 

/*function suma_multiplos(num){
    let suma=0;
    for(let i=1;i<num;i++){
        if(i%3==0||i%5==0){
            suma=suma+i
        }
    }
    return suma;
}
console.log(suma_multiplos(1000))*/


//! ejercicio 2
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

/*function numeros(){
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
}*/


//! ejercicios mouredev -- Bucles

//* 1. Crea un bucle que imprima los números del 1 al 20

/*for(let i=1; i<=20; i++){
    console.log(i)
}*/

//* 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

/*function sumaNuumeros(){
    sum = 0
    for(let i=1; i<=100; i++){
        sum = sum + i
    }
    return sum
}
console.log(sumaNuumeros())*/

//* 3. Crea un bucle que imprima todos los números pares entre 1 y 50

/*for(let i=1; i<=50; i++){
    if(i%2==0){
        console.log(i)
    }
    else{
        continue
    }
    
}*/

//* 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

/*let nombres = ["Mateo", "Maria", "Daniela", "Carla"]
nombres.forEach((nombre)=>{
    console.log(nombre)
})*/

/*for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}*/

/*for (n of nombres) {
    console.log(n)
}*/

//* 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

/*function conteoVocales(palabra){
    let contador_a= 0, contador_e=0, contador_i=0, contador_o=0, contador_u=0
    for (vocal of palabra) {
        if(vocal == "a"){
            contador_a++
        }
        else if(vocal == "e"){
            contador_e++
        }
        else if(vocal == "i"){
            contador_i++
        }
        else if(vocal == "o"){
            contador_o++
        }
        else if(vocal == "u"){
            contador_u++
        }
    }
    console.log(`a: ${contador_a}, e: ${contador_e}, i: ${contador_i}, o: ${contador_o}, u: ${contador_u}`)
}

conteoVocales("irlanda")*/

//* 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

/*let arrayNumeros = [8, 1, 6, 4, 5, 2]

function multiplicacion(){
    let producto = 1
    for( n of arrayNumeros){
        producto = producto * n
    }
    return producto
}

console.log(multiplicacion())*/

//* 7. Escribe un bucle que imprima la tabla de multiplicar del 5

/*function tablaMultiplicar(num){
    console.log(`Tabla del ${num}`)
    for(let i=0; i<=10; i++){
        console.log(`${num} * ${i} = ${i*num}`)
    }
}

tablaMultiplicar(5)*/

// 8. Usa un bucle para invertir una cadena de texto

/*const invertir = (palabra='') =>{
    let palabra_revertida=''
    for(let i=palabra.length-1; i>=0; i--){
        palabra_revertida = palabra_revertida + palabra[i]
    }
    console.log(palabra_revertida)
}
invertir("Jose MAteo Bernal Ayovi")*/

//* 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci


//* 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
/*let numerosArray = [50, 8, 15, 2, 1, 9, 14]
function mayores(array){
    let nuevoArray=[]
    for(n of array){
        if(n>=10){
            nuevoArray.push(n)
        }
    }
    return nuevoArray
}
console.log(mayores(numerosArray))*/


//! ejercicios mouredev -- Funciones

//* 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

//* 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
/*let palabras = ["mateo", "jose", 'bye', 'hola']
function convertirMayusculas(arreglo){
    let convertido = []
    let i = 0
    arreglo.forEach((palabra)=>{
        convertido[i]=palabra.toUpperCase()
        i+=1
    })
    return convertido
}
console.log(convertirMayusculas(palabras))*/


//* 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
/*const primo = (n) =>{
    let y = 0
    for(let i=1; i<=n;i++){
        if(n%i==0){
            y+=1
        }
    }
    if(y>2){
        return false
    }
    else{
        return true
    }
}
console.log(primo(20)) */

//* 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

//* 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
/*let numeros = [1,2,3,4,5,6,7,8,9,10]
const elevado=(x)=>{
    let i = 0
    let numeosElevado=[]
    x.forEach(numero => {
        numeosElevado[i]=Math.pow(numero,2)
        i+=1
    });
    return numeosElevado
}
console.log(elevado(numeros))*/

//* 10. Crea una función que calcule el factorial de un número dado
/*const factorial = (x)=>{
    let resultadoFactorial = 1
    for(let i=1; i<=x; i++){
        resultadoFactorial = resultadoFactorial * i
    }
    return resultadoFactorial
}
console.log(factorial(12))*/

