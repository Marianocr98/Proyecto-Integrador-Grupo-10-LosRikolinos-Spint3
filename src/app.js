const express = require('express');
const app = express();
app.use(express.static('../public'));

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});


const mainRutas = require('./routers/index')
const rutaShoppingCart = require('./routers/shopping-cart')
const rutaMenu = require('./routers/menu',)
app.use('/', mainRutas);
app.use('/shopping-cart', rutaShoppingCart)
app.use('/menu',rutaMenu)


/**
 app.get('/menu', (req,res)=>{
      res.sendFile(__dirname + '/views/menu.html');
  });
 * 
 */

