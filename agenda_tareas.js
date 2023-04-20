function agregarTarea(evento) {
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;

    if (nombre === '') {
        alert('No ha ingresado un nombre');
        return;
    }

    let text = document.createTextNode(nombre + ': ' + descripcion);

    let listItem = document.createElement('li');
    listItem.appendChild(text);

    document.getElementById('lista-de-tareas').appendChild(listItem);
}

document.getElementById('boton-agregar-tarea').addEventListener('click', agregarTarea);
