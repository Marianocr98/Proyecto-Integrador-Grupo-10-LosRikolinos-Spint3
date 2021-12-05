

//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {
    home: (req,res) =>{
        res.render('./menu/index');
    },
    menu: (req,res) =>{
        res.render('./menu/menu');
    },
} 


module.exports =  controllerIndex;