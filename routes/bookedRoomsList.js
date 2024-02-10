const express = require('express');

const bookedRoomsListController = require('../controller/bookedRoomsList');
const bookedRoomListRoute = express.Router();

bookedRoomListRoute.get('/bookedroomslist', bookedRoomsListController);

module.exports = bookedRoomListRoute;