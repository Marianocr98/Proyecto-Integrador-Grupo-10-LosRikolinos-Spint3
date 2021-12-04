const path = require('path')

const productController = {
    products: (req, res) => {
        res.render('./productos/productos');
    },
    productDetail: (req, res) => {
        res.render('./productos/productDetail');
    },
    

}

module.exports = productController;