const express = require('express');
const app = express();
app.use(express.static('../public'));


app.set('view engine', 'ejs');
app.set('views', 'views');



/* Variable para acceso a rutas*/
const mainRutas = require('./routers/indexRouter');
const rutaUser = require('./routers/userRouter') /*airu*/ 
const products = require('./routers/productsRouter');



/*Rutas disponibles*/
app.use('/', mainRutas);
app.use('/', rutaUser) 
app.use('/', products);



/*Server Funcionando*/
app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});