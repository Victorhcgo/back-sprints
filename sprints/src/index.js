const {mongoose} = require ("./database")

const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 5500;

//Settings
app.set('port', process.env.PORT || 5500 );

//Middlewares
app.use(morgan('dev')); //ver las peticiones del servidor
app.use(express.json()); //

//Routes
app.use('/api/task' , require('./routes/taskRoutes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// permitirá crear variables de ambiente customizadas


//Starting the server

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en http://localhost:${app.get('port')}`);
});


