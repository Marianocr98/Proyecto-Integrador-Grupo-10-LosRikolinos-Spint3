const path = require('path');


//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {
    home: (req,res) =>{
        res.sendFile(path.join(__dirname, '../views/main/index.html'));
    },
    menu: (req,res) =>{
        res.sendFile(path.join(__dirname,'../views/main/menu.html' ))
    },
    shoppingCart : (req,res)=>{
        
        res.sendFile(path.join(__dirname, '../views/main/shopping-cart.html'));
    
    },

} 


module.exports =  controllerIndex;