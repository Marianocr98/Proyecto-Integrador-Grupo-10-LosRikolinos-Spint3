const path = require('path')

const productController = {
    products: (req, res) => {
        res.render('./productos/productos', {product: products, hamburge:hamburguesas});
    },
    productDetail: (req, res) => {
        let detalle = products.find( element => element.id == req.params.id); 
        res.render('./productos/productDetail', {detail: detalle,});
    },
    
    shoppingCart : (req,res)=>{
        res.render('./productos/shopping-cart');
    }
}

const products = [
    {
        id: 1,
        direction: '/productDetail/1',
        title: 'Jamón y Queso',
        image: '/img/empanada-jamon-y-queso.jpg',
        imgDescription: 'Empanadas jamon y queso',
        description: 'Empanadas de jamón con extra queso',
        price: 199
    },
    {
        id: 2,
        direction: '/productDetail/2',
        title: 'Pollo',
        image: '/img/empanadas.jpeg',
        imgDescription: 'Empanadas fritas',
        description: '',
        price: 8000
    },
    {
        id: 3,
        direction: '/productDetail/3',
        title: 'Carne',
        image: '/img/Empanada-de-Carne.jpg',
        imgDescription: 'Empanadas de carne',
        description: '',
        price: 120
    },
    {
        id: 4,
        direction: '/productDetail/4',
        title: 'Choclo',
        image: '/img/empanadas2.jpeg',
        imgDescription: 'Empanadas al horno',
        description: '',
        price: 150
    },
    {
        id: 5,
        direction: '/productDetail/5',
        title: 'Arabes',
        image: '/img/empanadas-arabes.jpg',
        imgDescription: 'Empanadas Arabes',
        description: '',
        price: 155
    },
    {
        id: 6,
        direction: '/productDetail/6',
        title: 'Humita',
        image: '/img/empanadas-humita.jpg',
        imgDescription: 'Empanadas humita',
        description: '',
        price: 100
    },
    
]

const hamburguesas = [
    {
        id: 7,
        direction: '/productDetail/1',
        title: 'Hamburguesa Rikolinos 1.0',
        image: '/img/hamburguesa.jpg',
        imgDescription: 'hamburguesas rikolinos',
        description: 'Hamburguesas carne 4oz, chedar, lechuga, panceta, huevo',
        price: 2000
    },
    {
        id: 8,
        direction: '/productDetail/2',
        title: 'Hambuguesa Cheddar 2.0',
        image: '/img/hamburguesa1.jpg',
        imgDescription: 'Empanadas fritas',
        description: '',
        price: 90
    },
    {
        id: 9,
        direction: '/productDetail/3',
        title: 'Hambuguesa la Rikarda 3.0',
        image: '/img/hamburguesa2.jpg',
        imgDescription: 'Empanadas de carne',
        description: '',
        price: 120
    },
    {
        id: 10,
        direction: '/productDetail/4',
        title: 'Hamburguesa simple Palta 4.0',
        image: '/img/hamburguesaPalta.jpg',
        imgDescription: 'Empanadas al horno',
        description: '',
        price: 150
    },
    {
        id: 11,
        direction: '/productDetail/5',
        title: 'Hamburguesa aleman-Chess 5.0',
        image: '/img/hamburguesa4.jpg',
        imgDescription: 'Empanadas Arabes',
        description: '',
        price: 155
    },
    {
        id: 12,
        direction: '/productDetail/6',
        title: 'Hamburguesa Double-Bacon 6.0',
        image: '/img/hamburguesa5.jpg',
        imgDescription: 'Empanadas humita',
        description: '',
        price: 100
    }
]


module.exports = productController;