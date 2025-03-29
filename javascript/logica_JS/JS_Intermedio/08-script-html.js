
const agregarTarea = () =>{
    let tareas = {}
    const titulo_tarea = document.getElementById('titulo_tarea').value
    const descripcion_tarea = document.getElementById('contenido_tarea').value
    const lugarTareas = document.getElementById('tareas')

    tareas = {
        titulo : titulo_tarea,
        descripcion : descripcion_tarea
    }

    for(tareaAgregada in tareas){
        const listarTareas = document.createElement('li')
        listarTareas.textContent = tareas[tareaAgregada]
        lugarTareas.appendChild(listarTareas)
    }

    titulo_tarea=''
    descripcion_tarea=''
}

