
// expresiones regulares --> patron de busqueda de texto

//* Sintaxis
const regex = /Hola/
const regexDos = RegExp('Hola')
const texto = 'Hola como estas'

// Test --> verifica coincidencia (Devuelve true o false)
console.log(regex.test(texto));
console.log(regexDos.test(texto));

