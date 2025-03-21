//! String

let nombreCompleto="Mateo Bernal"

// length --> Longuitud de una cadena de texto
console.log(nombreCompleto.length)


// Acceseder a un valor especifico de la cadena
console.log(nombreCompleto[0])


// Metodos Comunes
console.log(nombreCompleto.toUpperCase()) // transforma todo a mayuscula
console.log(nombreCompleto.toLowerCase()) // transforma todo a minisculas
console.log(nombreCompleto.indexOf('Bernal')) // da el indice donde encontro la palabra (-1 cuando no encuentra el valor)
console.log(nombreCompleto.includes('Bernal')) // indica si la cadena existe
console.log(nombreCompleto.slice(4, 10)) // devuelve el valor especificando con el indice
console.log(nombreCompleto.replace("Mateo", "Jose")) // remplaza el valor 


// Template literals (plantillas literales)

// permite escribir texto en varias lineas
let myName=`Jose
Mateo
Bernal
Ayovi`

console.log(myName)

// El simbolo "\" es ignorado en JS
let ignora = "Hola\ Mundo"
console.log(ignora)

