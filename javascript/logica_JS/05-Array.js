
// inicializacion

let datos=["Bernal", 21]
let datosDos= new Array()


// Metodos Array

//push() --> Agrega contenido al array
datos.push("Mateo")
console.log(datos)

//pop() --> Elimina el ultimo elemento del array
datos.pop()
console.log(datos)

//shift() --> Elimina el primer elemento del array
datos.shift()
console.log(datos)

//unshift() --> Agrega varios elementos al principio del array
datos.unshift("Luis", "Alvarez")
console.log(datos)

//length --> Es una propiedad que cuanta la longitud del Array
datos.length
console.log(datos.length)

//slice --> Devuleve una copia de una porcion del Array (Genera un nuevo array)
//Desde - hasta-1
let datosTres=datos.slice(1, 3)
console.log(datosTres)




//? limpiar los datos de un Array

//Una manera limpiar un Array es inicializandolo nuevamente
datos=[]
console.log(datos)

//Otra manera (no es recomendable usarla)
datos.length=0
console.log(datos)


