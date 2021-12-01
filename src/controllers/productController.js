const path = require('path')

productController = {
    shoppingCart : (req,res)=>{
        
            res.sendFile(path.join(__dirname, '../views/main/shopping-cart.html'));
        
    }
}

module.exports = productController;