const express = require('express');
const creatRoomController = require('../controller/createRoom');

const createRoomRouter = express.Router();

createRoomRouter.post('/createroom', creatRoomController);

module.exports = createRoomRouter;