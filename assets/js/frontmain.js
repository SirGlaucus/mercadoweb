
// Selectores
const limpiarCestaSelector = document.querySelector('#limpiar-cesta')
const modalBodySelector = document.querySelector('#modal-para-mostrar')

$(window).on('load', function () {
    $('#myModal').modal('show')
})

limpiarCestaSelector.addEventListener('click', () => {
    modalBodySelector.innerHTML = ""
    localStorage.clear()
    stringProductos = ''
})

const modificarModal = (arrayObjetosFrutas) => {
    modalBodySelector.innerHTML = ""
    arrayObjetosFrutas.forEach((elemento) => {
        const nuevaCard = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">${elemento.nombre}</h5>
                        </div>

                        <div class="card-body">
                            <img src="${elemento.ruta_imagen}" class="card-img-top" alt="...">
                        </div>
                    </div>
                </div>
        `
        modalBodySelector.innerHTML = modalBodySelector.innerHTML + nuevaCard
    })
}

let stringProductos = JSON.parse(localStorage.getItem('Productos'))
const agregarLocalStorage = (nombreFruta, rutaFruta) => {
    if (!stringProductos) {
        stringProductos = [{ nombre: nombreFruta, ruta_imagen: rutaFruta }]
    } else {
        stringProductos = stringProductos.concat([{ nombre: nombreFruta, ruta_imagen: rutaFruta }])
    }
    localStorage.setItem('Productos', JSON.stringify(stringProductos))
    modificarModal(stringProductos)
}

const botonesFruta = document.querySelectorAll('.boton-carrito')
botonesFruta.forEach(botonFruta => {
    botonFruta.addEventListener('click', (event) => {
        const nombreFruta = event.target.dataset.nombreFruta
        const imagenFruta = event.target.dataset.rutaFruta
        agregarLocalStorage(nombreFruta, imagenFruta)
    })
})

$(document).ready(() => {
    $("body").css("background-color", "#3DD6D0")
    $(".color-texto-navbar").css("color", "white")
})