const mongoose = require('mongoose');

const bookRoomSchema = new mongoose.Schema({
    Customer_name : String,
    Date : Date,
    Start_Time : Date,
    End_Time : Date,
    Room_Id : Number,
    Booking_Id :String,
    Booking_status : String,
    Booking_Date : {
        type : Date,
        default : new Date()
    }
});

module.exports = mongoose.model('bookedroom', bookRoomSchema);