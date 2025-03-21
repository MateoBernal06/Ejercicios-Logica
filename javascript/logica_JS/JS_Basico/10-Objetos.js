
//Sintaxis
let person = {
    name: "Mateo",
    age: 21,
    adreess: "Guatemala y condorcunga"
}

//?Acceso de propiedad

//Por medio de (.) 
//*(es la opcion mas recomendable)
console.log(person.name)

//Por medio de ([])
console.log(person['age'])


//Modificacion de propiedades
person.age=20
console.log(person)


//Eliminacion de propiedades
delete person.adreess
console.log(person)


//Agregacion de propiedades
person.email = 'jose.bernal@epn.edu.ec'
console.log(person)


//Igualdad de objetos
//! no es posible comparar de la meanera tradicional (no se compara el valor sino la direccion de memoria)

let personDos = {
    name: "Mateo",
    age: 21,
    adreess: "Guatemala y condorcunga"
}

console.log(person==personDos)
console.log(person===personDos)


//Interpolacion

for(key in person){
    console.log(`${key} : ${person[key]}`)
}

//Acceso a variable, para acceder a una variable se hace uso de la palabra reservada (this.)
//para hacer referencia a una key

let personTres = {
    name: "Mateo",
    age: 21,
    adreess: "Guatemala y condorcunga",
    jod: function(){
        console.log(`${this.name} esta sin empleo`)
    }
}

console.log(personTres)
console.log(personTres.jod())