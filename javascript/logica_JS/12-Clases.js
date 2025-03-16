
//* Permite crear plantillas objetos

//Sintaxis
class Cliente{
    constructor(ci, nombre, apellido){
        this.ci=ci
        this.nombre=nombre
        this.apellido=apellido
    }
}

//Ingreso de datos
let clienteUno = new Cliente(1752700888, "Mateo", "Bernal")
console.log(clienteUno)
console.log(typeof clienteUno)


//Valores por defecto -- (Los valores seran remplazados una vez el usuario halla ingresado datos)
/*class Animal{
    constructor(nombre='nombre animal', categoria='categoria a la que pertenece'){
        this.nombre = nombre
        this.categoria = categoria
    }
}*/

/*let animal = new Animal()
console.log(animal)


//Acceso a propiedades
console.log(animal.categoria)
console.log(animal['nombre'])*/


//Funciones en clases
class Equipo{
    constructor(nombre='nombre animal', goleador='categoria a la que pertenece'){
        this.nombre = nombre
        this.goleador = goleador
    }
    gol(){
        return `Gol de ${this.goleador}`
    }
}

let equipo = new Equipo("Catolica", "Ismael Diaz")
console.log(equipo)
console.log(equipo.gol())


//Propiedades privadas
//* (#) permite definir una propiedad de una clase como privada 

class PagoServicios{
    #numeroCuenta
    constructor(numeroCuenta, servicio){
        this.#numeroCuenta = numeroCuenta
        this.servicio = servicio
    }
}
let pagoAgua = new PagoServicios(17858885, "Agua")
console.log(pagoAgua)
//!console.log(pagoAgua.#numeroCuenta) (no se puede ver ni editar) 


//Getters y Setters
class pagoInternet{
    #numeroCuenta
    #valor
    constructor(numeroCuenta, servicio, valor){
        this.#numeroCuenta = numeroCuenta
        this.servicio = servicio
        this.#valor=valor
    }

    /**
     * @param {string} newCuenta
     */

    // Metoddo que permite editar el valor de la clase
    set numeroCuenta(newCuenta){
        this.#numeroCuenta = newCuenta
    }
    
    // Metodo de lectura
    get valor(){
        return this.#valor
    }

}
let pago = new pagoInternet(17858885, "Internet Hogar", 25.80)
console.log(pago)

pago.numeroCuenta = 'new 84484'
console.log(pago.valor)

// Herencia
//* extends --> Para que una clase obtega las propiedades de la clase padre se hace uso de la palabra reservada 
//* super --> Obtiene el valor del constructor de la clase padre

class Animal{
    constructor(nombre='', categoria=''){
        this.nombre = nombre
        this.categoria = categoria
    }

    sound(){
        console.log("Emite sonido")
    }
}

class Mamifero extends Animal{
    constructor(name, categoria, size){
        super(name, categoria)
        this.size = size
    }
    accion(){
        console.log("Tiene pelo") 
    }
}

let mamifero = new Mamifero("Gato", "Mamifero", 140)
mamifero.sound()
mamifero.accion()
console.log(mamifero)


// Clases Estaticas --> Permite acceder a la funcion de una clase sin tener que instanciarla previamente
//* Se hace uso de la palabra reservada static
class operacionSuma{
    static sum(x, y){
        return x+y
    }
}
console.log(operacionSuma.sum(5,9))



