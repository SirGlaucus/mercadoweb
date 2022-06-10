//Cargando librerias
const { Pool } = require('pg')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    port: 5432,
    database: 'mercadoweb'
})

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

//  Definir la carpeta “assets” como carpeta pública del servidor
app.use(express.static('assets/imgs'))

// Ruta de la pagina inicial
app.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM frutas')
    res.render('dashboard', {
        layout: 'dashboard',
        frutas: result.rows
    })
})

