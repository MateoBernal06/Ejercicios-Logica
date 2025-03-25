
class Game {
    constructor(name, precio){
        this.name = name
        this.precio = precio
    }
    verJuego(){
        console.log(`El juego ${this.name} cuesta ${this.precio}`);
    }
}


let gameUno = new Game('Free fire','free')
gameUno.verJuego()


//? Clases abstractas --> Es una clase que no se puede instanciar directamente y que está diseñada para servir como una 
//? base para otras clases.
class Animal {
    constructor(name){
        if(new.target === Animal){
            throw new Error("No se puede instaciar una clase abtracta");
        }
        this.name = name
    }
    sound(){
        throw new Error("Este metodo se debe inplemtar a una subclase");
    }
}

//? Polimorfismo --> Consiste en permitir que un mismo método pueda tener diferentes comportamientos dependiendo 
//? del objeto que lo utilice.
class Mamifero extends Animal{
    sound(){
        console.log('Sonido de mamifero');
    }
}

class Reptil extends Animal{
    sound(){
        console.log('Sonido de reptil');
    }
}

let mamiferoUno = new Mamifero('Gato')
let reptilUno = new Reptil('Camaleon')

console.log(mamiferoUno);
console.log(reptilUno);

mamiferoUno.sound();
reptilUno.sound();


//? Mixins --> Manera de compartir funcionaldades sin necesidad de realizar una herencia

const AnimalVolar = {
    volar(){
        console.log(`${this.name} esta volando`);
    }
}

class Aves extends Animal{}
Object.assign(Aves.prototype, AnimalVolar)

let aveUno = new Aves('Gallina')
aveUno.volar()


//? Patro de diseño (Convencion que se usa resolveer problemas comunes)
// Patron singleton --> Se asegura que una clase se pueda instanciar una unica vez

class Sesion {
    constructor (nameUser){
        if(Sesion.instance){
            return Sesion.instance
        }
        this.nameUser = nameUser
        Sesion.instance = this
    }
}

let sesionUno = new Sesion("Mateo Bernal")
let sesionDos = new Sesion()
console.log(sesionUno.nameUser);
console.log(sesionDos.nameUser);


//? Symbol --> Permite crear propiedades privadas (manera antigua)

const idUser = Symbol('id')

class User {
    constructor(name){
        this.name = name
        this[idUser] = Math.random()
    }
}

//? instanceof --> Permite verificar si un objeto es instaciado de una clase (devuelve true o false)

class Car{
    constructor(modelo){
        this.modelo = modelo
    }
}

let carUno = new Car('Ferrari Rojo')
console.log(carUno instanceof Car);


//? proxy --> Permite personaliza el comportamiento de una clase






