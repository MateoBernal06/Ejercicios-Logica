
// Funciones simples
function mySaludo(){
    console.log('Hola como estas')
}
mySaludo()


//Funcion con parametros
function myName(name){
    console.log(`Hola ${name}`)
}
myName("Mateo")


//Funcion anonima --> se guarda la funcion en una variable
const mySaludoDos = function(){
    console.log("Hola que tal")
}
mySaludoDos()


//Funciones flecha
const holaMundo = ()=>{
    console.log("Hola Mundo")
}
holaMundo()

//*manera resumida de una funcion fecha
const holaPlaneta = (planeta)=> console.log(`Hola ${planeta}`)
holaPlaneta("Marte")


//Funciones anidadas --> son funciones que tienen funciones dentro de ellas
function externa(){
    console.log("Funcion externa")
    function interna(){
        console.log("Funcion interna")
    }
    interna()
}
externa()


//Funciones de orden superior -->son funciones que reciben como parametro otra funcion
function superior(funcion, param){
    funcion(param)
}
superior(myName, "Mateo")
