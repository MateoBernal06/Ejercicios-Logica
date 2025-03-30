const lugarTareas = document.getElementById('tareas')
const titulo_tarea = document.getElementById('titulo_tarea')

const agregarTarea = () =>{
    let tareas = {}
    
    tareas = {
        titulo : titulo_tarea.value
    }
    
    if((titulo_tarea.value).length == 0){
        alert('Campo obligatorio')
        return
    }

    for(tareaAgregada in tareas){
        const listarTareas = document.createElement('li')
        listarTareas.textContent = tareas[tareaAgregada]
        lugarTareas.appendChild(listarTareas)
    }

    titulo_tarea.value = ''
}
