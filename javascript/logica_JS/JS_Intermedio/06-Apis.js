
// API -- interfas de programacion de interfases
//Conjunto de reglas que permiten conectarnos a un servidor para obtener datos.

//? MAnejo de datos

//APIS Rest --> Se basan en el protocolo http + url + json

// Metodos HTTP
// GET --> permite obtener datos al servidor (ver)
// POST --> permite enviar datos al servidor (crear)
// PUT --> permite enviar datos al servidor para actualizarlos (actualizar) 
// DELET --> permite borrar datos del servidor (eliminar)

// Metodos HTTP Adicionales
// PATCH --> permite actualizar parcialmente un recurso (actualiza un pedazo de los datos)
// OPTIONS --> permite consultar al servidor que metodos http estan permitidos

// Codigos de respuesta del protocolo HTTP
// 200 ok --> Exito en la solicitud
// 400 --> Error del cliente (mi error)
// 404 --> La solicitud no existe
// 500 --> Error en el servidor


//? Consumo de datos (API)

// Manera nativa

/*fetch('https://jsonplaceholder.typicode.com/photos/5')
// Transforma los datos a formato JSON
.then((response)=>{
    return response.json()
})
// Procesa los datos
.then((data)=>{
    console.log(data);
})
// Captura los posibles errores
.catch((error)=>{
    console.log('Error', error);
})*/


// Usando Async-Await

/*const verDatos = async () => {
    try {
        // Procesa los datos 
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        //Transforma los datos a formato JSON
        const data = await response.json()
        console.log(data); 

    } catch (error) {
        console.log('Error', error);
    }
}

verDatos()*/


//? Manejo de errores

/*const consultarServidor = async() =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/MB")
        if(!response.ok){
            throw Error(`Se produjo un error ${response.status}`)
        }
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log('Error', error);
    }
}

consultarServidor()*/

//? Solcitudes APIS 

//* GET 

/*const verDatos = async () => {
    try {
        // Procesa los datos 
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        //Transforma los datos a formato JSON
        const data = await response.json()
        console.log(data); 

    } catch (error) {
        console.log('Error', error);
    }
}

verDatos()*/


//* POST

/*const crearDatos = async () =>{
    
    const datos = {
        userId: 1,
        title : "Mi primer post de una api",
        body: "Body de mi primer post de una api",
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            // Se especifica el metodo a usar
            method:"POST",
            // Se especifica la cabecera 
            headers: {'Content-Type':'application/json'},
            // Transforma los datos a formato Json
            body: JSON.stringify(datos)
        })
        const data = await response.json() 
        console.log(data);

    } catch (error) {
        console.log('Error', error);
    }
}

crearDatos()*/


//* PATCH

/*const actualizacionParcial = async() =>{
    try {
        const datos = {title:"Titulo actualizado!!"}
        const url = await fetch('https://jsonplaceholder.typicode.com/posts/12',{
            method: "PATCH",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        })
        const data = await url.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

actualizacionParcial()*/


//? Autentificacion 

//* Por medio de una Api Key

const verClima = async (city) =>{
    try {
        const keyClima = '140571e2994c991508de47bc03622c96'
        const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyClima}`)
        if(!url.ok){
            throw Error(`Se produjo un error ${url.status}`)
        }
        const data = await url.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

verClima("quito")

//* Metodos de autentificacion y autorizacion
// JWT
// Bearer Tokens


//* Versionado de APIS
