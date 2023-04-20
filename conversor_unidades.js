function convertirUnidades() {
    let cantidad = document.getElementById('cantidad').value;

    if (cantidad === '' || isNaN(Number(cantidad))) {
        alert('Cantidad incorrecta');
        return;
    }

    cantidad = Number(cantidad);

    let unidadOrigen = document.getElementById('unidad-origen').value;
    let unidadDestino = document.getElementById('unidad-destino').value;

    if (unidadOrigen === unidadDestino) {
        alert('Seleccione dos unidades diferentes');
        return;
    }

    let resultado;

    switch (unidadOrigen) {
        case 'celsius':
            if(unidadDestino !== 'fahrenheit') {
                alert('Conversion incorrecta');
                return;
            } else {
                resultado = cantidad * (9/5) + 32;
            }
            break;

        case 'fahrenheit':
            if(unidadDestino !== 'celsius') {
                alert('Conversion incorrecta');
                return;
            } else {
                resultado = ((cantidad - 32) * 5) / 9;
            }
            break;

            //TODO: falta implementar restantes.
    }

    let texto = `${cantidad} ${unidadOrigen} es ${resultado} ${unidadDestino}`;
    let textoTag = document.createTextNode(texto);

    document.getElementById('resultado').innerHTML = '';
    document.getElementById('resultado').appendChild(textoTag);
}

document.getElementById('boton-convertir').addEventListener('click', convertirUnidades)
