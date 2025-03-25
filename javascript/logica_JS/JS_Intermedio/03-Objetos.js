
//? Prototipos - Herencia
//(Esta en desuso el uso de herencia en objetos ya que existen las clases)

// Prototipos --> mecanismo por el cual un objeto puede heredar metodos y propiedades de otro objeto

let person = {
    name: "Mateo",
    age: 21,
    adrress: 'Guatemala y condorcunga',
    saludo(){
        console.log(`Hola ${this.name}`);
    }
}

// manera de acceder a un prototipo
console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));


// Herencia -->  mecanismo por el cual un objeto puede heredar metodos y propiedades de otro objeto

let studen = Object.create(person) //Permite crear un objeto en base a otro objeto
studen.university = 'EPN'
console.log(studen.name);
console.log(studen);


//? Metodos estaticos y de instancia

//prototype --> permite agregar nuevas funcionalidades al prototipo
//! Esta manera ya no se usa por la implementacion de las clases recientemente
function Teacher(name, num_studens){
    this.name =name
    this.num_studens = num_studens
}

Teacher.prototype.promedy = function(){
    console.log('Todos pasaron');
}

let teacherMath = new Teacher('Mateo',15)

teacherMath.promedy()


//? Metodos avanzados

//Object.assign --> permite convinar objetos en uno solo (objetoBase, objeto)

let personaUno = {
    name: 'Jose',
    surname: 'Bernal'
}

let personaDos = {
    age: 21
}

let unionPerson = Object.assign(personaUno, personaDos)
console.log(unionPerson);


//Object.keys --> devuelve las keys del objeto como array
console.log(Object.keys(unionPerson));

//Object.values --> devuelve los valores del objeto como array
console.log(Object.values(unionPerson));

//Object.entries --> devuelve los keys-valores del objeto dentro de un array 
console.log(Object.entries(unionPerson));


