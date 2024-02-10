const mongoose = require('mongoose');
const app = require('./app');
const config = require('./utils/config');

app.listen(config.PORT,()=>{

    try{
        console.log(`Server connected port on ${config.PORT}` );

        mongoose.connect(config.MONGODB_URI)
            
            console.log('Server connected to database');

        
    }catch(error){
        console.log(error.message);
    }
   
});