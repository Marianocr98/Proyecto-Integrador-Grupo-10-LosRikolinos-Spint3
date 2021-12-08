//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {
    home: (req,res) =>{
        res.render('./menu/index', {homeProducts: home});
    },
    menu: (req,res) =>{
        res.render('./menu/menu', {categorias : categoria} )
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



const categoria = [
    {
        id: "Hamburguesa",
        categoria: 'Hamburguesa',
        image: 'hamburguesa1.jpg',
        textoAlternativo: 'Menu de Hamburguesas',
    },
    {
        id: "Pizza",
        categoria: 'Pizza',
        image: 'pizza.jpeg',
        textoAlternativo: 'Seccion de pizzas',
    },
    {
        id: "Ravioles",
        categoria: 'Ravioles',
        image: 'ravioles.jpeg',
        textoAlternativo: 'Seccion de Ravioles',
    },
    {
        id: "Empanadas",
        categoria: 'Empanadas',
        image: 'empanadas.jpeg',
        textoAlternativo: 'Seccion de empanadas',
    },
    {
        id: "Asado",
        categoria: 'Asado',
        image: 'carneasada.jpeg',
        textoAlternativo: 'Seccion de Asado',
    },
    {
        id:"Bebidas",
        categoria: 'Bebidas',
        image: 'coctel.jpg',
        textoAlternativo: 'Seccion de bebidas',
    }
]

module.exports =  controllerIndex;