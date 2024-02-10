const bookRoomModel = require('../models/bookRoom');

const bookRoomController = async(req,res)=>{
   try{
    const {Customer_name, Date, Start_Time, End_Time, Room_Id} = req.body;

    const chkDate = await bookRoomModel.find({Room_Id:Room_Id, Date : Date, Start_Time : {$gte:Start_Time},End_Time:{$lte:End_Time}})
    
    if(chkDate.length === 0){
        const newBookedRoom = new bookRoomModel({
            Customer_name, 
            Date, 
            Start_Time, 
            End_Time, 
            Room_Id
        });        
    
        const savedBookedRoom = await newBookedRoom.save();
        let id = await bookRoomModel.countDocuments()+1
        savedBookedRoom.Booking_Id = "B"+ id;
        

        savedBookedRoom.Booking_status = "Booked"

       await savedBookedRoom.save();
    
        res.status(200).json({message : `Room number ${Room_Id} booked on ${Date}`,savedBookedRoom}); 
    }else{
        res.status(400).json({Message : "This room is already booked on the date and time you provided"})
    }

   }catch(error){
    res.status(500).json({error : error.message});
   }

};

module.exports = bookRoomController;