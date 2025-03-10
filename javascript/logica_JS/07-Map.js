//! no se puede repetir la clave solo el valor


// Declaracion
let myMap = new Map()

// Inicializacion
myMap = new Map([
    ["name", "Mateo"],
    ['universidad', 'EPN']
])

console.log(myMap)


// Metodos

//set --> Permite agregar datos al Map (clave, valor)
myMap.set('carrera', 'Desarrollo de software')
console.log(myMap)

//get --> Obtiene el valor de la clave que se ingrese
//? si la clave ingresada no existe devuelve undefind
myMap.get('carrera')
console.log(myMap)

//has --> Comprueba si una clave existe (devuelve true o false)
console.log(myMap.has('carrera'))
console.log(myMap.has('adrress'))

//delete --> Elimina una valor de Map haciendo uso de la clave
myMap.delete('carrera')
console.log(myMap)

//keys --> Devuelve todas las key de Map
myMap.keys()
console.log(myMap.keys())

//values --> Devuelve todas los valores de Map
myMap.values()
console.log(myMap.values())

//entries --> Lista todos los datos de Map (clave-vallor) 
console.log(myMap.entries())

//size --> Devuelve la longitud del Map
console.log(myMap.size)

//clear --> Elimina todos los valores de Map
myMap.clear()
console.log(myMap)

