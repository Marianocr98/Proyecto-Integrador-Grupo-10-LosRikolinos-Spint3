const path = require('path');

const controllerIndex = {
    home: (req,res) =>{
        res.sendFile(path.join(__dirname, '../views/main/index.html'));
    },
    menu: (req,res) =>{
        res.sendFile(path.join(__dirname,'../views/main/menu.html' ))
    }
} 


module.exports =  controllerIndex;