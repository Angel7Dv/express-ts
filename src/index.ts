import express from "express";
import exphbs, { engine } from 'express-handlebars'
import path from 'path'

// rutes import
import homeRute from './routes/home'
import blockRute from './routes/blocks'

import './database'

// initiations
const app = express()


// settings
/*** @enviroment_var = process.env.POST*/
app.set('port', process.env.POST || 3000);
app.set('views', path.join(__dirname,'views')) // determina la ubicacion de la carpeta views


// setings - templates
app.engine('.hbs', engine({ // html views
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'), // componentes reusables
    partialsDir: path.join(app.get('views'), 'partials'), // 
    helpers: require('./lib/helpers'),
    defaultLayout: 'main',
}))
app.set('view engine', '.hbs');


// Midelewares
app.use(express.json()) // request form anothers webs json
app.use(express.urlencoded({ extended: false })) // request form html


// routes
app.use('/',homeRute)
app.use('/blocks',blockRute) 


// Static Files
app.use(express.static(path.join(__dirname, 'public')));


// Starting server
app.listen(
    app.get('port'), // callback 1 port 
    () => {
        console.log( // second callback
            `server on http://localhost:${app.get('port')}/`
        )
    })