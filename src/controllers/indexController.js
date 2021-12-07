

//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {

    
    home: (req,res) =>{
        res.render('./menu/index', {homeProducts: home});
    },
    menu: (req,res) =>{
        res.render('./menu/menu');
    },
} 


const home = [
    {
        titulo: "Hamburguesa",
        direccion: "/productos/#hamburguesas",
        image:"/img/hamburguesa2.jpg",
        descripcion:"Disfrute de las mejores Hamburgesas"
    },
    {
        titulo: "Parrilla",
        direccion: "/productos",
        image:"/img/carneasada.jpeg",
        descripcion:"Especializados en parrilla"
    },
    {
        titulo: "Postres",
        direccion: "/productos",
        image:"/img/helado.jpg" ,
        descripcion:"Postres unicos y originales"
    },
    {
        titulo: "Bebidas",
        direccion: "/productos",
        image:"/img/vino.jpg",
        descripcion:"Bebidas de todo tipo"
    }
]


module.exports =  controllerIndex;


