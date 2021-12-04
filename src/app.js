const express = require('express');
const app = express();
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', 'src/views');



/* Variable para acceso a rutas*/
const mainRutas = require('./routers/index');
const rutaUser = require('./routers/user') /*airu*/ 
const products = require('./routers/products');



/*Rutas disponibles*/
app.use('/', mainRutas);
app.use('/', rutaUser) 
app.use('/', products);




/*Server Funcionando*/
app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});