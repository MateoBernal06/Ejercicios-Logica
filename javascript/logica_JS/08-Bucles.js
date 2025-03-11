
// for
let numbers = []
for (let i=1; i<=10; i++){
    numbers.push(i)
}

console.log(numbers)

// While
let contador = 0
while (contador<5) {
    console.log(contador)
    contador++
}

// do - while
let i=0
do {
    console.log(`Hola mundo ${i+1}`)
    i++
} while (i<3);

// for-of --> recorre los valores de algo iterable (array, map, )

let myMap = new Map([
    ["name", "Mateo"],
    ['universidad', 'EPN']
])
for(let dato of myMap){
    console.log(dato)
}

let mySet = new Set(["Mateo", "Bernal", 21])
for(let dato of mySet){
    console.log(dato)
}

let datos=["Jose","Bernal", 21]
for(let dato of datos){
    console.log(dato)
}

// forEach --> es una funcion que permite iterar en un arreglo

datos.forEach(function(value){
    console.log(value)
})

//* Manera resumida de un forEach
console.log("-------------")
datos.forEach((value)=>console.log(value))

console.log("-------------")
myMap.forEach((value)=> console.log(value))

console.log("-------------")
mySet.forEach((value)=> console.log(value))