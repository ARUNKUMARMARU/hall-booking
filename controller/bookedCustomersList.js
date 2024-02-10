const bookedRoomModel = require('../models/bookRoom');

const customersListController = async(req,res)=>{
    try{
        const bookedCustomersList = await bookedRoomModel.find({},{_id:0, Booking_Date:0, __v:0,Booking_status:0 })

        res.status(201).json({Message : "List of Booked Customers : ", bookedCustomersList}) 
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

module.exports = customersListController;