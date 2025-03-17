
// Exportacion de funciones
export const suma=(a, b)=>{
    return a + b
}

// Exportacion de propiedades
export const PI = 3.1416


// Exportacion por defecto (Se puede realizar una sola vez)
//* permite exportar solo funciones 
const division = (a, b) =>{
    return a/b
}
export default division


// Exportacion de clases

export class Pitagoras{
    constructor(a, b, h=0){
        this.a=a
        this.b=b
        this.h=h
    }

    hipotenusa(){
        this.h = Math.pow(this.a, 2) + Math.pow(this.b, 2)
        return Math.sqrt(this.h)
    }
}

