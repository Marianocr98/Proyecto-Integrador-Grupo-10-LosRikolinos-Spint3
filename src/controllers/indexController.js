//**Rutas de acceso disponnible para el usuario  */
const controllerIndex = {
    home: (req,res) =>{
        res.render('./menu/index');
    },
    menu: (req,res) =>{
        res.render('./menu/menu', {categorias : categoria} )
    },
} 

module.exports =  controllerIndex;


//** */
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
        id: "",
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
