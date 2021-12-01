const path = require('path');

const controllerIndex = {
    home: (req,res) =>{
        res.sendFile(path.join(__dirname, '../views/main/index.html'));
    }
} 


module.exports =  controllerIndex;