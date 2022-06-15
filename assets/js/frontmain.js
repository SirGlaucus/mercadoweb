
    // Selectores
    const limpiarCestaSelector = document.querySelector('#limpiar-cesta')
    const modalBodySelector = document.querySelector('#modal-para-mostrar')
    const botonBananaSelector = document.querySelector('#botonBanana')
    const botonCebollaSelector = document.querySelector('#botonCebolla')
    const botonLechugaSelector = document.querySelector('#botonLechuga')
    const botonPapaSelector = document.querySelector('#botonPapa')
    const botonPimentonSelector = document.querySelector('#botonPimenton')
    const botonTomateSelector = document.querySelector('#botonTomate')

    // LocalStorage y variable adicional para manejarla
    let stringProductos = localStorage.getItem('Productos')

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

    const transformarToArray = (stringProductos) => {
        arrayProductos = stringProductos.split(',')
        const frutasObjetos = arrayProductos.map((fruta) => {
            let nombre
            let ruta_imagen
            switch (fruta) {
                case 'Banana':
                    return { nombre: 'Banana', ruta_imagen: '/banana.png' }
                case 'Cebolla':
                    return { nombre: 'Cebolla', ruta_imagen: '/cebollas.png' }
                case 'Lechuga':
                    return { nombre: 'Lechuga', ruta_imagen: '/lechuga.png' }
                case 'Papa':
                    return { nombre: 'Papa', ruta_imagen: '/papas.png' }
                case 'Pimenton':
                    return { nombre: 'Pimenton', ruta_imagen: '/pimenton.png' }
                case 'Tomate':
                    return { nombre: 'Tomate', ruta_imagen: '/tomate.png' }
            }
        })
        return frutasObjetos
    }
    const agregarLocalStorage = (nombreFruta) => {
        if (!stringProductos) {
            stringProductos = `${nombreFruta}`
        } else {
            stringProductos = stringProductos + `,${nombreFruta}`
        }
        localStorage.setItem('Productos', stringProductos)
        listaObjetoFrutas = transformarToArray(stringProductos)
        console.log(listaObjetoFrutas)
        modificarModal(listaObjetoFrutas)
    }

    botonBananaSelector.addEventListener('click', () => {
        agregarLocalStorage('Banana')
    })

    botonCebollaSelector.addEventListener('click', () => {
        agregarLocalStorage('Cebolla')
    })

    botonLechugaSelector.addEventListener('click', () => {
        agregarLocalStorage('Lechuga')
    })

    botonPapaSelector.addEventListener('click', () => {
        agregarLocalStorage('Papa')
    })

    botonPimentonSelector.addEventListener('click', () => {
        agregarLocalStorage('Pimenton')
    })

    botonTomateSelector.addEventListener('click', () => {
        agregarLocalStorage('Tomate')
    })

    $(document).ready(() => {
        $("body").css("background-color", "#3DD6D0")
        $(".color-texto-navbar").css("color", "white")
    })