
// Declaracion
let mySet = new Set()
console.log(mySet)


// Inicializacion
mySet = new Set(["Mateo", "Bernal", 21])
console.log(mySet)

//? Metodos 

//add --> Añade un elemento al final del arreglo
mySet.add("bjosemateo15@gmail.com")
console.log(mySet)

//delete --> Elimina un elemento del arreglo (toca especificar el valor a borrar)
mySet.delete("Mateo")
console.log(mySet)

//has --> Comprueba si existe un elemento en el arreglo (Devuelve true o false)
console.log(mySet.has("Bernal"))
console.log(mySet.has("Mateo"))

//size --> Devuelve la longitud del arreglo
console.log(mySet.size)

//Convertir un Set a Array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertit un Array a Set
mySet = new Set(myArray)
console.log(mySet)


// Diferencia entre Set y Arrays
//* los set no admiten valores repetidos
