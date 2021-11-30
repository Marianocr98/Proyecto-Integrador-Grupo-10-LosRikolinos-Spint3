const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/productos', (req,res)=>{
    res.sendFile(__dirname + '/views/productos.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/shopping-cart', (req,res)=>{
    res.sendFile(__dirname + '/views/shopping-cart.html');
});

app.get('/menu', (req,res)=>{
    res.sendFile(__dirname + '/views/menu.html');
});


app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});