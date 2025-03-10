//! Datos primitivos de JS
//JS tiene 7 tipos de datos primitivos


//Undefined (No tiene u valor concreto)
let indefinido = undefined;
console.log(indefinido);


//Null (No tiene un valor asignado)
let nullValue = null;
console.log(nullValue);


//Symbol (Son valores unicos que pueden ser usados como identificadores de propiedades)
// (evita coliciones con propiedades es usado en objetos)
let mySymbol = Symbol("Hello");
console.log(mySymbol);


//BigInt (Permite representar un numero sumamente grande)
let numeroGrande = BigInt(45522888888888888888888888888888888888888888888);
let numeroGrande2 = 45522888888888888888888888888888888888888888888n;
console.log(numeroGrande);


//? (typeof) Permite mostrar el tipo de dato con el que se esta trabajando
console.log(typeof mySymbol);
console.log(typeof numeroGrande);
console.log(typeof indefinido);
console.log(typeof nullValue);
