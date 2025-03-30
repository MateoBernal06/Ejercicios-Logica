
// DOM --> estructura que hace rferencia a la pagina web

//? Seleccion de elementos

//* Metodos Basicos (selector HTML)

//document.getElementById('id') --> retorna un unico elemento que tenga el identificador (id)
const idUsuario = document.getElementById('id')

//document.getElementsByClassName('class') --> retorna un conjuto de elemetenos que tengan el identificador (class)
const classUsuario = document.getElementsByClassName('class')

//document.getElementsByTagName('tag') --> retorna una coleccion HTML que coincidan con el nombre de la etiqueta especificada.
const tagUsuario = document.getElementsByTagName('tag')


//* Metodos Modernos (selector CSS)

//document.querySelector('.parrafo') --> Busca y selecciona el primer elemento en el documento que coincida 
//con el selector CSS especificado (Devuelve null si no encuentra coincidencias)
//! (sino se coloca el punto antes busca la etiqueta HTML)
document.querySelector('.parrafo')

//document.querySelectorAll('.parrafo') --> Busca y selecciona todos los elementos en el documento que coincidan con el 
//selector CSS especificado. (Devuelve una NodeList) (Devuelve una lista vacía si no encuentra coincidencias)
document.querySelectorAll('.parrafo')


//? Manipulacion de elementos

//textContent --> se utiliza para leer o modificar el contenido de texto de un elemento HTML.
const titulo =document.getElementById('titulo')
titulo.textContent = 'Hola mundo'

//innerHTML --> se utiliza para leer o modificar el contenido HTML de un elemento.
//(no solo maneja texto, sino también etiquetas HTML.)
const parrafo = document.querySelector('.contenedor')
parrafo.innerHTML = '<p>Este es un nuevo parrafo</p>'


//? Modificacion de atributos

//Obtencion del atributo
const link = document.querySelector('a')
const url = link.getAttribute('href')

//Establecimiento del atributo
link.setAttribute('href','http://holaMundo.com')

//Comprobacion de atributo --> Devuelve un boolean
const target = link.hasAttribute('target')

//Eliminacion de atributo 
link.removeAttribute('target')


//? Interaccion con clases CSS

//se le esta dando una nueva clase
const css = document.querySelector('.box')
css.classList.add('lugar-caja')

//se elimina el valor de clase
css.classList.remove('lugar-caja')

//Si no exite lo agrega y si existe lo elimina
css.classList.toggle('lugar-caja')

//editar estilo css
const estiloBoton = document.querySelector('button')
estiloBoton.style.backgroundColor = 'blue'
estiloBoton.style.color = 'black'


//? Creacion y eliminacion de elementos

// Creacion
const newParrafo = document.createElement('p')
newParrafo.style.color = 'blue'
newParrafo.textContent = 'Este es un parrafo creado desde JS'

// lugarHTML.appendChild(contenido a enviar)
parrafo.appendChild(newParrafo)


// Insercion lugar concreto
const itemsList = document.querySelector('ul')
const createElement = document.createElement('li')
createElement.textContent = 'Python'
const secondElement = itemsList.children[1]

itemsList.append(createElement) //añande un elemento al final del listado
itemsList.prepend(createElement) //añande un elemento al principio del listado
secondElement.before(createElement) //añande un elemento antes
secondElement.after(createElement) //añande un elemento despues


// Eliminacion
newParrafo.remove()


//? Elementos del DOM

// .addEventListener('clik') --> al hacer click se ejecuta la funcion
const enviarAlert = document.querySelector('button')
enviarAlert.addEventListener('click',()=>{
    alert('Hola, gracias por hacer click!')
})

// .addEventListener('DOMContentLoaded') --> van a realizar una accion cuando este cargada la pagina
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('El dom a cargado correctamente');
})

// .addEventListener('mouseenter') --> realiza una accion cuando el mouse pasa sobre el elemento
enviarAlert.addEventListener('mouseenter',()=>{
    enviarAlert.style.backgroundColor = 'red'
})

// .addEventListener('submit', (event)) --> al hacer click realiza una accion que programemos
const botonForm = document.querySelector('form')
botonForm.addEventListener('submit', (event)=>{
    //codigo
})

// .addEventListener('keypress',(value)) --> al presionar enter realiza una accion
enviarAlert.addEventListener('keypress',(value)=>{
    if(value.key === 'Enter'){
        // Codigo
    }
})