

//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {
    home: (req,res) =>{
        res.render('./menu/index');
    },
    menu: (req,res) =>{
        res.render('./menu/menu');
    },
    shoppingCart : (req,res)=>{
        res.render('./productos/shopping-cart');
    },

} 


module.exports =  controllerIndex;