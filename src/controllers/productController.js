const path = require('path')

const productController = {
    products: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productos.html'));
    },
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productsDetail/productDetail.html'));
    }
}

module.exports = productController;