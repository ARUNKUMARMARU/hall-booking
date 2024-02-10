const express = require('express');
const bookRoomController = require('../controller/bookRoom');

const bookedRoomRouter = express.Router();

bookedRoomRouter.post('/bookroom', bookRoomController);

module.exports = bookedRoomRouter;