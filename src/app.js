const express = require('express');
const app = express();
app.use(express.static('../public'));


//*Server Funcionando*//
app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});



///*** Variable para acceso a rutas***/
const mainRutas = require('./routers/index')
const rutaShoppingCart = require('./routers/shopping-cart')
const rutaMenu = require('./routers/menu',)




//Rutas disponibles//
app.use('/', mainRutas);
app.use('/shopping-cart', rutaShoppingCart)
app.use('/menu',rutaMenu)



