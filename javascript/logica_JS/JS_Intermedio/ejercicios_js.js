
// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

// funccion map
let nombres=["Mateo","Jose","Luis","Sofi"]

/*let arrayNombres = nombres.map(nombre => nombre.toUpperCase())
console.log(arrayNombres);

// funcion filter
let cincoLetras = nombres.filter(nombre => nombre.length < 5)
console.log(cincoLetras);

// funcion reduce
let concatenacionNombres = nombres.reduce((concatenacion, nombre)=>concatenacion+nombre)
console.log(concatenacionNombres);*/


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numeros = [2,9,7,5,3,4,10]

/*let numerosPares = (x)=>{
    let elevadosCubo = x.map(num => Math.pow(num, 3))
    console.log(elevadosCubo.filter(num => num%2==0));
}

numerosPares(numeros)*/


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let arrayAplanar = [[[1,2],6],8,[9]]

/*let newArray = arrayAplanar.flat(arrayAplanar.length)
console.log(newArray);*/


// 4. Ordena un array de números de mayor a menor

/*let numerosArray = numeros.sort((a,b)=>a-b)
let mayorMenor = numerosArray.reverse()
console.log(mayorMenor);*/

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

let setA = new Set([1,6,9,7,5])
let setB = new Set([1,8,10,4,5])

// union
/*let union = new Set([...setA, ...setB])
console.log(union);

// interseccion
let interseccion = new Set([...setA].filter(num => setB.has(num)))
console.log(interseccion);

// diferencia
let diferencia = new Set([...setA].filter(num => !setB.has(num)))
console.log(diferencia);*/


// 6. Itera los resultados del ejercicio anterior

/*union.forEach(num => {console.log(num);})
interseccion.forEach(num => {console.log(num);})
diferencia.forEach(num => {console.log(num);})*/

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let datosPersonales = new Map([
    ['usuarioUno',['Mateo',21,'jose.bernal@epn.edu.ec']],
    ['usuarioDos',['Jose',22,'jose@epn.edu.ec']],
    ['usuarioTres',['Marcelo',17,'marcelo@epn.edu.ec']],
])
/*datosPersonales.forEach((valor,key) => {
    console.log(`${key} del usuario ${valor}`)
})*/

// 8. Dado el mapa anterior, crea un array con los nombres
let arrayNombres = []
/*let nombreUsuarios = datosPersonales.forEach((valor,clave)=>{
    arrayNombres.push(valor[0])
})

console.log(arrayNombres);*/


// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let correos = []
/*datosPersonales.forEach((valor, clave)=>{
    if( valor[1]>=18){
        correos.push(valor[2])
    }
})
console.log(new Set(correos));*/

