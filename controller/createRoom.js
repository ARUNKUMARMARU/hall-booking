const roomModel = require('../models/roommodel');

const roomController = async(req,res)=>{
   try{
    const {Room_Id, Number_of_seats_available, Amenities_in_room, Price_for_1hour } = req.body;
    
    const newRoom = new roomModel({
        Room_Id,
        Number_of_seats_available,
        Amenities_in_room,
        Price_for_1hour
    });
    const savedRoom = await newRoom.save();
    
    res.status(200).json({Message : "New room details added", savedRoom})

   }catch(error){

    res.status(500).json({error : error.message})
   }

}

module.exports = roomController;