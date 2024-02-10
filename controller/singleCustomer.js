const bookedRoomModel = require('../models/bookRoom');

const singleCustomerController = async(req,res)=>{
    try{
        const customerName = req.params.name;
        const customerData = await bookedRoomModel.find({Customer_name : customerName},{_id:0,__v:0});

        res.status(201).json({message: `${customerName}'s Booking Details : `, customerData});

    }catch(error){
        res.status(500).json({error : error.message});
    }
}

module.exports = singleCustomerController;