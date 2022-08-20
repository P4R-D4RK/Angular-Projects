const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Directorio Público
app.use( express.static('public'));

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') )

app.listen(process.env.PORT, () => {
    console.log(`Server running on the port ${process.env.PORT}`);
})