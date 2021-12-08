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
        res.render('./productos/bebidas',{drink : productsDrinks })
    },
    productsHamburguer : (req,res) => {
        res.render('./productos/productHamburguer',{productsHamburguer : productsHamburguesa })
    },
    productsAsado : (req,res) => {
        res.render('./productos/productAsado',{asado : productsAsado })
    },
    productsRavioles : (req,res) => {
        res.render('./productos/productRavioles',{ravioles : productsRavioles })
    },
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
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: '/img/pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
]

const productsHamburguesa = [
    {
        id: "Hambuguesa2.0",
        title: 'Hambuguesa2.0',
        image: 'hamburguesa.jpg',
        imgDescription: '',
        price: 499
    },
    {
        id: "Hambuguesa3.0",
        title: 'Hambuguesa3.0 ',
        image: 'hamburguesa2.jpg',
        imgDescription: 'Imagen de Hamburguesa 3.0',
        price: 599
    },
    {
        id: "Hambuguesa1",
        title: 'Combo Mar del plata',
        image: 'hamburguesa1.jpg',
        imgDescription: 'Imagen de Combo de Mar del Plata',
        price: 599
    },
    {
        id: "ComboBig",
        title: 'Combo Big',
        image: 'hamburguesa4.jpg',
        imgDescription: 'Imagen de Combo Big',
        price: 699
    },
    {
        id: "HamburguesaTripleBacon",
        title: 'Hamburguesa Triple',
        image: 'hamburguesa5.jpg',
        imgDescription: 'Imagen de Hamurguesa Triple Bacon',
        price: 1
    },
    {
        id: "GrandTasty",
        title: 'Vegan Burguer',
        image: 'hamburguesaPalta.jpg',
        imgDescription: 'Imagen de Grand Tasty',
        price: 1
    },
]

const productsPizza = [
    {
        id: "Muzza",
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

const productsRavioles =[
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
    {
        id: "Muzza",
        title: 'Muzzarella',
        image: 'pizza.jpeg',
        imgDescription: 'Grande de Muzzarella',
        price: 399
    },
]
const productsAsado = [
    {
        id: "Combo1",
        title: 'Combo Parrilita',
        image: 'parrilla.jpg',
        imgDescription: 'Vino',
        price: 899
    },
    {
        id: "Combo2",
        title: 'Combo Familiar',
        image: 'parrillada.jpg',
        imgDescription: 'Vino',
        price: 999
    },
    {
        id: "Combo3",
        title: 'Combo Carnivoro',
        image: 'asado.jpeg',
        imgDescription: 'Vino',
        price: 999
    },
    {
        id: "CarneWagyu",
        title: 'Carne Wagyu',
        image: 'carne.jpeg',
        imgDescription: 'Vino',
        price: 1049
    },
    {
        id: "Especial",
        title: 'Especial De La Casa',
        image: 'carneasada.jpeg',
        imgDescription: 'Vino',
        price: 199
    },
    {
        id: "Sandwich1",
        title: 'Sandwich de Bondiola',
        image: 'Sandwich-de-Bondiola.jpg',
        imgDescription: 'Vino',
        price: 199
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
    {
        id: "Bebida",
        title: 'Bebida',
        image: 'vino.jpg',
        imgDescription: 'Vino',
        price: 199
    },
    {
        id: "Bebida",
        title: 'Bebida',
        image: 'vino.jpg',
        imgDescription: 'Vino',
        price: 199
    },
    {
        id: "Bebida",
        title: 'Bebida',
        image: 'vino.jpg',
        imgDescription: 'Vino',
        price: 199
    },
    {
        id: "Bebida",
        title: 'Bebida',
        image: 'vino.jpg',
        imgDescription: 'Vino',
        price: 199
    },
    {
        id: "Bebida",
        title: 'Bebida',
        image: 'vino.jpg',
        imgDescription: 'Vino',
        price: 199
    },
]


module.exports = productController;