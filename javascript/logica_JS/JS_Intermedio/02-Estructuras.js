
//Arrays

//? Funciones de orden superior 
let numbers = [1,2,3,9,5,10]

// forEach --> Recorre el array
numbers.forEach(num=>{
    console.log(num);
})

// map --> Recorre el array y crea un nuevo array, donde se aplica una funcion a cada elemento
let numbersMAp = numbers.map(num => Math.pow(num, 2))
console.log(numbersMAp);

// filter --> Fitra elementos, creando un nuevo array
let numbersImpares = numbers.filter(num => num%2!==0)
console.log(numbersImpares);

// reduce --> Reduce un array a un unico valor
let sumaArray = numbers.reduce((resultado, num)=>resultado+num)
console.log(sumaArray);


//? Manipulacion

// flat --> Se aplana un array.
let flatArray = [1,[2,6],[8,[8,6]]]
let longitudArray = flatArray.length;
let array = flatArray.flat(1) // Se coloca la longitud 
array = flatArray.flat(longitudArray-1) 
console.log(array);


// flatMap
// Flat + Map
// Se especifica el criterio de aplaneamiento 
let frase = ["Hola como estas", "laptop lenovo"]
let newArray = frase.flatMap(palabra => palabra.split(" "))
console.log(newArray);


//? Ordenamiento

// sort --> funcion que ordena alfabeticamente los elementos de un array
let letras = ["a",'p','l','w',"s"]
let letrasOrdenadas = letras.sort()
console.log(letrasOrdenadas);

// (para ordenar numeros se debe realizar una condicion)
let numbersDos = [10,6,9,1,0,5]
let numerosOrdenados = numbers.sort((a,b)=>a-b)
console.log(numerosOrdenados);

// reverse --> revierte el orden de un array
numerosOrdenados.reverse()
console.log(numerosOrdenados);


//? Busquedas

// includes --> Retorna true o false si un elemento existe en un array
console.log(numerosOrdenados.includes(1));
console.log(numerosOrdenados.includes(11));

// find --> Permite encontrar el primer elemento mediante una condicion
// (si la condicion no se cumple devuelve indfinido)
let primerPar = numerosOrdenados.find(num => num%2===0)
console.log(primerPar);

// findIndex --> Permite encontrar el indice primer elemento mediante una condicion
// (si la condicion no se cumple devuelve -1)
let primerParIndex = numerosOrdenados.findIndex(num => num%2===0)
console.log(primerParIndex);


//Sets

//? Operaciones

// Eliminacion de duplicados 
let numbersArray = [1,2,2,9,9,4,7,8,8] //se transoforma el array a set para borrar los duplicados
let numbersSet = [...new Set(numbersArray)] //se vuelve a convertir en un array
console.log(numbersSet);

// Union --> Se unen dos sets a uno
let setA = new Set([1,3,7,5,6])
let setB = new Set([1,3,7,8,10,4])
let union = new Set([...setA, ...setB])
console.log(union);

// Interseccion --> Devuelev los elementos comunes entre los dos sets
const interseccion = new Set([...setA].filter(num => setB.has(num)))
console.log(interseccion);

// Diferencia --> Devuelev los elementos diferentes entre los dos sets
const diferencia = new Set([...setA].filter(num => !setB.has(num)))
console.log(diferencia);

// Conversion
let arrayA = [...setA]
console.log(arrayA);


//? Iteracion

setA.forEach(num => {
    console.log(num);
})


//Maps

let mapA = new Map([
    ["name",'Mateo'],
    ["apellido","Bernal"],
    ["university", "EPN"]
])

console.log(mapA);

//? Iteracion
mapA.forEach((valor, key)=>{
    console.log(`${key} -- ${valor}`);
})

//? Conversion

// De mapa a array
let arrayfrom = Array.from(mapA)
console.log(arrayfrom);

// De mapa a objeto
let objetoA = Object.fromEntries(mapA)
console.log(objetoA);

// De objeto a mapa
let objetoFomMap = new Map(Object.entries(objetoA))
console.log(objetoFomMap);

