
// Funcion que recibe funcion como parametro
let nombre = "Mateo"
let nombreDos = "JoseMateo"

const saludo = function(nombre){
    console.log(`Hola ${nombre}`)
}

saludo(nombre)

const procesarSaludo = (saludoFuncion, nombre)=>{
    saludoFuncion(nombre)
}

procesarSaludo(saludo, nombreDos)


// Funciones flecha (avanzadas)

// Retorno implicito
//* (No hace falta realizar un return)
const suma = (a, b) => a+b
console.log(suma(4,9))

// This lexico 
//* (toma el contexto del objeto un parametro que se encuentre definido previamente)
//* (las funciones flecha crean su propio contexto de This)
const person = {
    ci: 1752700888,
    dato: function(){
        console.log(`El C.I es ${this.ci}`)
    },
    flechaDato: () => {
        console.log(`El C.I es ${this.ci}`)
    }
}
console.log(person)
person.dato();
//!person.flechaDato()

//IIFE (Expresion de funcion invocada inmediatamente )
//* se ejecuta al instante de ser definidas
//* se debe colocar el ; antes del codigo

// IIFE Clasica
(function(){
    console.log(`IIFE Clasica`)
})();

(()=>{
    console.log(`IIFE Arrow Clasica`)
})();

//Operador Rest (...)
//* el parametro rest genera un array automaticamente
const sumaDos = (...numbers)=>{
    let suma = 0
    numbers.forEach((num) => {
        suma += num
    })
    console.log(suma)
}
sumaDos(5,6,9,9)


//Operador spread
//* Desempaqueta los tres primeros valores
//* Si existe mas de valores de los definidos los ignora, pero si hay menos genera un error

let a = [4,1,6]

function sumaN(a, b, C){
    return a+b+C 
}

sumaN(...a)


//Recursivilidad --> Son funciones que se ejecutan asi mismas

const factorial = (num) => {
    if(num<=1){
        return 1
    }
    return num * factorial(num-1)
}

console.log(factorial(5))


//Funciones Parciales --> Son funciones que reciben una parte de los parametros, para posteriormente definir una 
// funcion que reciba el resto de los parametros

const parciales = (a) =>{
    return function(b,c){
        sumaDos(a,b,c)
    }
}

let mandarParcial = parciales(4)
mandarParcial(7,7)


//Currying --> transforma una funcion que recibe varios parametros a una secuencia de funciones
//que reciben un unico parametro
//* Permiten trata los datos de varias maneras
function sumaCurry(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
let abc = sumaCurry(5)(7)(1)
console.log(abc)


//Callback --> funcion que se le envia una funcion y se personaliza su comportamiento

//* Sin funcion flecha
function procesoData(valores, Callback){
    let resultado = sumaN(...valores)
    Callback(resultado)
}

function procesoResultado(resultado){
    console.log(`El resultado es ${resultado}`)
}

procesoData([1,9,7], procesoResultado)


//* Con funcion flecha

procesoData([1,9,7], (resultadoFlecha)=>{
    console.log(`Resultado: ${resultadoFlecha}`);
})

