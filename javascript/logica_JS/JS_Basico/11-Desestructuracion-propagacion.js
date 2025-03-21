
//? Desestructuracion
//Consiste en extraer datos de arrays u objetos para posteriormente guardarlas en variables

//Arrays
let numbers = [1,2,3,4,5]
let numbersDos = [8, 9]

//Sintaxis
let [numUno, numDos, numTres]=numbers
console.log(numUno)
console.log(numDos)
console.log(numTres)

//Con valores predefinidos
let [numCuatro=0, numCinco=0, numSeis=0] = numbersDos
console.log(numCuatro)
console.log(numCinco)
console.log(numSeis)


//Ignorar elementos de un array
let [numSiete,,,,numOcho]=numbers
console.log(numSiete)
console.log(numOcho)


//Objetos
let person = {
    name:"Jose",
    university: "EPN",
    age:21,
    email: "jose@gmail.com",
}

let lenguajes = {
    frontend:"React",
    backend:"FastApi"
}

//Sintaxis
let {name, age}=person
console.log(name)
console.log(age)

//Nuevo nombre de variables y valores predefinidos
let {name:nameDos, university:universityDos, age:ageDos, 
    address="Guatemala y condorcunga"} = person
console.log(nameDos)
console.log(universityDos)
console.log(ageDos)
console.log(address)


//Acceso a objetos anidados
/*let {name:nameTres, university:universityTres, age:ageTres, 
    lenguajes:{frontend}} = person
console.log(frontend)*/


//? Propagacion (...)

let university={
    place:"Ladron de Guevara",
    Director:"?"
}

//Arrays

//Sintaxis
let numbersTres = [...numbers, 10, 15]
console.log(numbersTres)

//Combinacion 
let numbersCuatro = [...numbers, ...numbersDos]
console.log(numbersCuatro)

//Sintaxis
let datosPersondos = {...person, mother:"Irlanda"}
console.log(datosPersondos)

//Combinacion
let datosPerson = {...person, ...lenguajes}
console.log(datosPerson)

