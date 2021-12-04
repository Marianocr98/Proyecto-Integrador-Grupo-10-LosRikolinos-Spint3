const path = require('path')

const productController = {
    products: (req, res) => {
        res.render('productos');
    },
    productDetail: (req, res) => {
        res.render('productDetail');
    }
}

module.exports = productController;