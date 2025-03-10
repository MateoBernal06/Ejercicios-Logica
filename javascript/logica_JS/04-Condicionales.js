
let nombre="Jose"
let edad=21

//? Manera tradicional de if-else
if (nombre=="Mateo"&&edad==21){
    console.log("Bienvenido")
}
else{
    console.log("Usuario no encontrado")
}

//? Operador ternario
const reconocimientoUsuario = (nombre=="Mateo"&&edad==21 ? "Bienvenido" : "Usuario no registrado")
console.log(reconocimientoUsuario)


//Switch --> es util cuando se tiene que evaluar una variable que puede tener varios resultados
let dia = 4;

switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
    default:
        console.log("Numero erroneo")
        break;
}
