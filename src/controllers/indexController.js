

//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {
    home: (req,res) =>{
        res.render('index');
    },
    menu: (req,res) =>{
        res.render('menu');
    },
    shoppingCart : (req,res)=>{
        res.render('shopping-cart');
    },

} 


module.exports =  controllerIndex;