const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema ({
    Room_Id : Number, 
    Number_of_seats_available : Number,
    Amenities_in_room : Array,
    Price_for_1hour : Number
});

module.exports = mongoose.model('room', roomSchema);