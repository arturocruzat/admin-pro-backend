require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config');

//Crear servidor express
const app = express();

//Configurar CORS
app.use(cors());

//Base de datos
dbConnection();


//user: arturocruzat
//password: Efnd4ZR0KL2Wkosd


//Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});