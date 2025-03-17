import { suma,PI, Pitagoras } from "./15-Modulos-exportacion.js";
import division from "./15-Modulos-exportacion.js";

// importacion de una variable
console.log(PI)

// importacion de una funcion
console.log(suma(7,9))
console.log(division(8,2))

// importacion de una clase
let triangulo = new Pitagoras(5,3)
console.log(triangulo)
console.log(triangulo.hipotenusa())

