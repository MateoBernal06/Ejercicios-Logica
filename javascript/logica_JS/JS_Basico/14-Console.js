
//Console

//log() --> Muestra informacion por consola
console.log("Hola mundo")

//error() --> Se usa para el control de errores
console.error("Mensaje de error")
console.error("Error al conectar a la base de datos", new Error("Conexion Fallida"))

//warn()--> Se usa parra mostrar advertencias
console.warn("Este es un mensaje de advertencia")

//info() --> Se usa para mostrar informacion adicional
console.info("Informacion")

//table() --> Muestra la informacion en formato de tabla
let data = [{name:"Mateo", age: 20},{name:"Jose",age: 25}]
console.table(data)

//group() --> Funciona como una cabezera para mostrar informacion (El grupo se cierra con groupEnd)
console.group("Usuario: ")
console.log("Mateo")
console.log("Bernal")
console.log(21)
console.log("EPN")
console.groupEnd()

//time() --> Se usa paraa saber cuanto tiempo tarda en ejecutarse un bloque de codigo
//* se coloca el mismo texto para indicar que termina la ejecucion
console.time("Tiempo de ejecucion: ")
for(let i=0; i<100000;i++){}
console.timeEnd("Tiempo de ejecucion: ")

//assert() --> Muestra un mensaje de error si algo es falso
let edad = 12
console.assert(edad>=18, "El usuario tiene que ser mayor de edad")

//trace() --> Muestra un seguimiento de la ejecucion del codigo
console.trace("seguimiento")

//clear() --> limipia la consola
console.clear()


