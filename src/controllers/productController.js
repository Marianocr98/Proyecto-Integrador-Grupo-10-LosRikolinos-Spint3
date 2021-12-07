const path = require('path')

const productController = {
    products: (req, res) => {
        res.render('./productos/productos', {product: products});
    },
    productDetail: (req, res) => {
        let detalle = products.find( element => element.id == req.params.id); 
        res.render('./productos/productDetail', {detail: detalle});
    },
    shoppingCart : (req,res)=>{
        res.render('./productos/shopping-cart');
    }, 
    create: (req,res)=>{
        res.render('./admin/create');
    },
    productsPizza : (req,res) => {
        res.render('./productos/productPizza',{productPizza : productsPizza})
    },
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
        price: 90
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
    }
]

const productsPizza = [
    {
        id: "Pizza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 199
    },
]
module.exports = productController;