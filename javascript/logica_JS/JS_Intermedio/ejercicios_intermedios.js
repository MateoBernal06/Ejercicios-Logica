//TODO: Ejercicios objetos, Clases... 

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


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de 
// cada usuario y como valor todos los datos del usuario

let objetoDatos = Object.fromEntries(datosPersonales)

let nuevoMapa = new Map();

/*for (let key in objetoDatos) {
    let datosUsuario = objetoDatos[key];
    let email = datosUsuario[2];
    nuevoMapa.set(email, datosUsuario);
}

console.log(nuevoMapa);*/


//TODO: Ejercicios Programacion asincronica... 

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

/*let accion = (nombre)=>{
    setTimeout(()=>{
        console.log(`Hola, ${nombre}`);
    }, 2000)
}

const saludo = (nombre, callback) =>{
    callback(nombre)
}

saludo('Mateo', accion)*/


// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

/*const task1 = (callback) => {
    setTimeout(()=>{
        console.log('Tarea 1');
        callback()
    }, 1000)
}

const task2 = (callback) => {
    setTimeout(()=>{
        console.log('Tarea 2');
        callback()
    }, 1000)
}

const task3 = (callback) => {
    setTimeout(()=>{
        console.log('Tarea 3');
        callback()
    }, 1000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log('Todas las tareas se han completado');
        })
    })
})*/


// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

/*const parImpar = (num) => {
    const verificarNumero = new Promise((resultado, ejecucion)=>{
        if(num%2==0){
            resultado(`El Numero ${num} es par`)
        }
        else if(num%2!=0){
            resultado(`El Numero ${num} es impar`)
        }
        else{
            ejecucion('Error en la ejecucion')
        }
    }) 

    verificarNumero
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((error)=>{
        console.log(error);
    })
}

parImpar(98)*/

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".


/*const firstTask = () =>{
    return new Promise((resultado)=>{
        setTimeout(()=>{
            console.log("Primera tarea completada");
            resultado()
        },1000)
    })
}

const secondTask = () =>{
    return new Promise((resultado)=>{
        setTimeout(()=>{
            console.log("Segunda tarea completada");
            resultado()
        },2000)
    })
}

const thirdTask = () =>{
    return new Promise((resultado)=>{
        setTimeout(()=>{
            console.log("Tercera tarea completada");
            resultado()
        },1500)
    })
}

const ejercicioCuatro = ()=>{
    firstTask()
    .then(()=>secondTask())
    .then(()=>thirdTask())
    .then(()=>{
        console.log('Todas las tareas se completaron');
    })
    .catch((error)=>{
        console.log(error);
    })
}

ejercicioCuatro()*/


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

/*const firstTask = () =>{
    return new Promise((resultado)=>{
        setTimeout(()=>{
            console.log("Tarea 1 completada");
            resultado()
        }, 2000)
    })
}

const secondTask = () => {
    return new Promise((resultado)=>{
        setTimeout(()=>{
            console.log('Tarea 2 completada');
            resultado()
        }, 1000)
    })
}

const thirdTask = () => {
    return new Promise((resultado)=> {
        setTimeout(()=>{
            console.log('Tarea 3 completada');
            resultado()
        }, 1500)
    })
}

const ejecucionTareas = async() => {
    await firstTask()
    await secondTask()
    await thirdTask()
    console.log('Tareas completadas con exito');
}

ejecucionTareas()*/


// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

/*const getUser = async(id) =>{
    return new Promise((resultado, ejecucion)=>{
        setTimeout(()=>{
            if(String(id).length<5){
                resultado({id,nombre:`Usuario${id}`});
            }
            else{
                ejecucion('Usuario no encontrado')
            }
        }, 2000)
    })
}

const verUsuario = async (id) =>{
    try {
        const consulta = await getUser(id)
        console.log(consulta);
    } catch (error) {
        console.log(error);
    }
}

verUsuario('eded')*/



// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

/*console.log("Inicio")
setTimeout(() => 
    console.log("setTimeout ejecutado")
, 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")*/


// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

/*const funcionUno = () => {
    return new Promise((resultado)=>{
        setTimeout(()=>{
            resultado('Funcion 1 ejecutada');
        }, 2000)
    })
}

const funcionDos = () => {
    return new Promise((resultado)=>{
        setTimeout(()=>{
            resultado('Funcion 2 ejecutada');
        }, 3000)
    })
}

const funcionTres = () => {
    return new Promise((resultado)=>{
        setTimeout(()=>{
            resultado('Funcion 3 ejecuada');
        }, 4000)
    })
}

const ejercicioOcho=()=>{
    Promise.all([funcionUno(), funcionDos(), funcionTres()])
    .then((resultado)=>{console.log(resultado);})
    .then(()=>{console.log('Todas las promesas resueltas');})
    .catch((error)=>{console.log(error);})
}

ejercicioOcho()*/

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

/*const waitSeconds = async (segundos) =>{
    return new Promise((resultado)=>{
        setTimeout(()=>{
            resultado('Tiempo finalizado');
        }, segundos*1000)
    })
}

const ejercicioNueve = async(segundos) => {
    const ejecucion = await waitSeconds(segundos)
    console.log(ejecucion);
}

ejercicioNueve(3)*/

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes


/*const checkBalance = async() =>{
    return new Promise((resultado)=>{
        setTimeout(()=>{
            resultado(`Saldo disponible: $500`)
        }, 1000)
    })
}

let saldo = 500
const withdrawMoney = (amount)=>{
    return new Promise((resultado, ejecucion)=>{
        console.log(`Retirado ${amount}$...`);
        setTimeout(()=>{
            if(saldo>amount){
                saldo = saldo - amount
                resultado(`Operación exitosa, saldo restante: ${saldo}$`)
            }
            else{
                ejecucion('Error: Fondos insuficientes')
            }
        }, 2000)
    })
}

const ejercicioDiez = async (monto) =>{
    let contador = 0
    
    const verSaldo = await checkBalance()
    console.log(verSaldo);
    
    try {
        do {
            const retirarDinero = await withdrawMoney(monto)
            console.log(retirarDinero);
            contador++
        } while (contador<=1);
    } catch (error) {
        console.log(error);
    }
}

ejercicioDiez(300)*/


//TODO: Ejercicios APIS

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de 
// publicaciones

/*const listarPublicaciones = async() =>{
    try{
        const url = await fetch('https://jsonplaceholder.typicode.com/posts/99')
        const data = await url.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

listarPublicaciones()*/

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. 
// Si no lo es, lanza y muestra un error

/*const listarPost = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posxssxts')
        if(!response.ok){
            throw Error(`Status Error ${response.status}`)
        }
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log('Error', error);
    }
}

listarPost()*/


// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

/*fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})*/

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto 
// con propiedades como title o body

/*const datos = {
    userId:1,
    title: "Creacion de publicacion",
    body: 'Cuerpo de la publicacion'
}

const crearPublicacion = async(enviar) =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(enviar)
        })
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

crearPublicacion(datos)*/

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar 
// una publicación) en JSONPlaceholder

/*const datos = {
    userId:1,
    title: "Actualizacion de publicacion",
    body: 'Actualizacion de Cuerpo de publicacion'
}


const actualizarPublicacion = async(enviar,id) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(enviar)
        })
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

actualizarPublicacion(datos, 15)*/


// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso 
// existente

/*const datos = {
    title:"Mateo Bernal",
    body: "Cuerpo Mateo Bernal"
}

const patchPublicacion = async(enviar,id) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(enviar)
        })
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log('Error', error);
    }
}

patchPublicacion(datos, 17)*/

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y 
// verifica la respuesta

/*const borrarPublicacion = async(id) =>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type':'application/json'},
        })
        if(!response.ok){
            throw new Error(`Status Error ${response.status}`)
        }
        const data = response
        console.log(data);

    } catch (error) {
        console.log("Error",error);
    }
}

borrarPublicacion(8)*/

// 8. Crea una función que realice una solicitud GET (la que quieras) a 
// OpenWeatherMap

/*const apiKey ='140571e2994c991508de47bc03622c96'

const verClima = async(city) =>{
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        if(!response.ok){
            throw new Error(`Error Status ${response.status}`)
        }
        const data = await response.json()
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.weather[0].main);

    } catch (error) {
        console.log('Error', error);
    }
}

verClima('tokyo')*/


// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de 
// la especie y, finalmente, la cadena evolutiva a partir de la especie

/*const verPokemon = async(name) =>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if(!response.ok){
            throw new Error(`Status Error ${response.status}`)
        }
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log('Error',error);
    }
}

verPokemon('pichu')*/


// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint 
// de una API


// TODO: Ejercicio manejo del DOM

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al 
// cargar la página
document.addEventListener('DOMContentLoaded', ()=>{
    const saludo = document.getElementById('saludo')
    saludo.textContent = 'Hola Mundo!'
})


// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const imagen = document.querySelector('img')
const myImage = imagen.getAttribute('src')
imagen.setAttribute('src', './logotype.webp')


// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const box = document.getElementById('box')
box.addEventListener('click', ()=>{
    box.style.backgroundColor = 'green'
})


// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const colorParrafo = document.getElementById('paragraph')
colorParrafo.style.color = 'blue'

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y 
// lo agregue a una lista <ul id="list">
const agregar = () =>{
    const listar = document.getElementById('listar')
    const elemento = document.createElement('li')
    elemento.textContent = 'Nuevo elemento'
    listar.appendChild(elemento)
}

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el 
// párrafo del DOM
const eliminarTexto = () =>{
    const texto = document.getElementById('deleteParagraph')
    texto.remove()
}


// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje 
// "Nuevo Contenido"
const reemplazar = document.getElementById('nuevo')
reemplazar.innerHTML = '<h2>Nuevo contenido</h2>'

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al 
// hacer clic
const verAlerta = () =>{
    alert('Hola!!!')
}


// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se 
// debe actualizarse mostrando lo que se escribe
const input = document.getElementById('textInput')
const resultadoInput = document.getElementById('result')

const mostrarEscribir = () => {
    resultadoInput.textContent = input.value
}

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a 
// un color diferente
const cambiarColor = () =>{
    const body = document.querySelector('body')
    body.style.backgroundColor = 'yellow'
}
