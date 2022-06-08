//Cargando librerias
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// Iniciando el servidor
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})

// Configuracion del handlebars 
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine({ layoutsDir: __dirname + '/views' }))

// Accecibilizando las librerias de Boostrap y jQuery
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))

// Ruta de la pagina inicial
app.get('/', (req, res) => { res.render('main') })

