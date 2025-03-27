//* Programacion sincronica
// Ejecuta el programa en un solo hilo. Bloquea el programa esta que se acabe de realizar
// la accion anterior

console.log("inicio");
for (let index = 0; index < 10000000; index++) {}
console.log("fin");

//? Event Loop (bucle de eventos)
//? Componentes del event loop
// 1. call stack (pila de ejecucion) --> lugar donde se ejecutan las funciones (en orden)
// 2. Web API's (Apis del navegador) --> setTimeout() ...
// 3. Task Queue (cola de tareas) y MicroTask Queue (promesas)

//? Flujo del event loop (Manera en la que se ejecuta las cosas de manera sincona)
// 1. Call Stack
// 2. Operaciones asincronicas --> Web api's o node.js
// 3. Operacion termina --> La coloca en Task Queue y MicroTask Queue
// 4. Si Call Stack esta vacio --> Mueve las tareas del Task Queue o MicroTask Queue al Call Stack
// 5. El proceso se repite

//* Programacion asincrona
// Permite ejecutar múltiples tareas simultáneamente sin bloquear la ejecución del programa.

//? Callbacks
// Consiste en pasar como argumento una funcion a otra funcion, se ejecuta cuando la accion a terminado
//! callabacks hell, este problema se genera cuando un callback es dependiente de otro
console.log("inicio");

setTimeout(() => {
  console.log("En ejecucion");
}, 3000);

console.log("fin");

//? Promesas
// valor que puede estar disponible en el futuro, en el momento o nunca estar disponible

const promesaDosE = new Promise((resultado, ejecucion) => {
  //Accion a realizar
});

const promesa = new Promise((resultado, ejecucion) => {
  setInterval(() => {
    const ok = false;
    if (ok) {
      resultado("Ejecucion realizada con exito");
    } else {
      ejecucion("Error en la ejecucion");
    }
  }, 2000);
});

// .then
promesa
  .then((resultado) => {
    // Se ejecuta este codigo si todo salio bien
    console.log(resultado);
  })
  .catch((error) => {
    // Se ejecuta este codigo si se presento algun error
    console.log(error);
  })
  .finally(() => {
    console.log("Ejecucion final");
  });

// Encadenamiento de promesas

function promesaUno() {
  return new Promise((resultado) => {
    setTimeout(() => {
      console.log("Promesa Uno");
      resultado();
    }, 1000);
  });
}

function promesaDos() {
  return new Promise((resultado) => {
    setTimeout(() => {
      console.log("Promesa Dos");
      resultado();
    }, 1000);
  });
}

function promesaTres() {
  return new Promise((resultado) => {
    setTimeout(() => {
      console.log("Promesa Tres");
      resultado();
    }, 1000);
  });
}

promesaUno()
  .then(promesaDos)
  .then(promesaTres)
  .then(() => {
    console.log("Promesa final");
  });

//? Async/Await
//Async --> Convierte una funcion para que sea asincrona
//Await --> Pausa el programa hasta que la promesa se resuelva

function retardo(time) {
  return new Promise((resultado, ejecucion) => {
    setTimeout(() => {
      console.log("Ejecucion con retardo");
    }, time);
  });
}

const saludo = async () => {
  console.log("Hola");
  await retardo(2000);
  console.log("Mateo");
};

saludo();


