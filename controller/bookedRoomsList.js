const bookedRoomModel = require('../models/bookRoom');

const bookedRoomsListController = async(req,res)=>{
    try{
        const bookedRoomList = await bookedRoomModel.find({},{_id:0, Booking_Date:0, __v:0})

        res.status(201).json({Message : "List of Booked Rooms : ", bookedRoomList}) 
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

module.exports = bookedRoomsListController;