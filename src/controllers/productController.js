const path = require('path')

const productController = {
    products: (req, res) => {
        res.render('./productos/productos', {product: products});
    },
    productDetail: (req, res) => {
        let detalle = products.find( element => element.id == req.params.id); 
        res.render('./productos/productDetail', {detail: detalle,});
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
    productsBebidas : (req,res) => {
        res.render('./productos/bebidas',{name : productsDrinks })
    }
}

const products = [
    {
        id: 1,
        title: 'Jamón y Queso',
        image: '/img/empanada-jamon-y-queso.jpg',
        imgDescription: 'Empanadas jamon y queso',
        description: 'Empanadas de jamón con extra queso',
        price: 199
    },
    {
        id: 2,
        title: 'Pollo',
        image: '/img/empanadas.jpeg',
        imgDescription: 'Empanadas fritas',
        description: '',
        price: 8000
    },
    {
        id: 3,
        title: 'Carne',
        image: '/img/Empanada-de-Carne.jpg',
        imgDescription: 'Empanadas de carne',
        description: '',
        price: 120
    },
    {
        id: 4,
        title: 'Choclo',
        image: '/img/empanadas2.jpeg',
        imgDescription: 'Empanadas al horno',
        description: '',
        price: 150
    },
    {
        id: 5,
        title: 'Arabes',
        image: '/img/empanadas-arabes.jpg',
        imgDescription: 'Empanadas Arabes',
        description: '',
        price: 155
    },
    {
        id: 6,
        title: 'Humita',
        image: '/img/empanadas-humita.jpg',
        imgDescription: 'Empanadas humita',
        description: '',
        price: 100
    },
    
]

const productsPizza = [
    {
        id: "",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Napolitana",
        title: 'Napolitana',
        image: 'napolitana.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Calabresa",
        title: 'Calabresa',
        image: 'calabresa.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 449
    },
    {
        id: "Fugaseta",
        title: 'Fugaseta',
        image: 'fugazzeta.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 459
    },
    {
        id: "Italiana",
        title: 'Italiana',
        image: 'pizzas.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 479
    },
    {
        id: "Grande-de-Muzza",
        title: 'Grande de Muzza',
        image: 'grandeDeMuzza.jpg',
        imgDescription: 'Grande de Muzzarella',
        price: 499
    },
]
const productsDrinks = [
    {
        id: "Bebida",
        title: 'Bebida',
        image: 'vino.jpg',
        imgDescription: 'Vino',
        price: 199
    },
]

module.exports = productController;