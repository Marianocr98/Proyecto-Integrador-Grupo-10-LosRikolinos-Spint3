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
        id: 1,
        categoria: 'Hamburguesa',
        image: 'hamburguesa1.jpg',
        textoAlternativo: 'Menu de Hamburguesas',
    },
    {
        id: 2,
        categoria: 'Pizza',
        image: 'pizza.jpeg',
        textoAlternativo: 'Seccion de pizzas',
    },
    {
        id: 3,
        categoria: 'Ravioles',
        image: 'ravioles.jpeg',
        textoAlternativo: 'Seccion de Ravioles',
    },
    {
        id: 4,
        categoria: 'Empanadas',
        image: 'empanadas.jpeg',
        textoAlternativo: 'Seccion de empanadas',
    },
    {
        id: 5,
        categoria: 'Asado',
        image: 'carneasada.jpeg',
        textoAlternativo: 'Seccion de Asado',
    },
    {
        id: 6,
        categoria: 'Bebidas',
        image: 'coctel.jpg',
        textoAlternativo: 'Seccion de bebidas',
    }
]
