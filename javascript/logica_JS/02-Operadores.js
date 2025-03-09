//! Operadores

//? Operadores aritmeticos
let a = 8;
let b = 2;

console.log(a**b) // exponente

// (Incremento)
a++;
// (Decremento)
b--;

console.log(a);
console.log(b);


//? Operadores de comparacion
let c=9
let d='9'
console.log(c===d) //Igualdad por identidad (tipo y valor)
console.log(c===c)

console.log(c!==d) //Distinto
console.log(c!=c) 


//? Operadores logicos
// AND (&&)
console.log(5>8 && 9<2)

// OR (||)
console.log(5>8||9<2)

// NOT (!)
console.log(!(5>8 && 9<2))


//? Operadores Ternarios
const clima=false
// si clima ...... caso contrario ....
clima ? console.log("Soleado") : console.log("Lluvioso")

