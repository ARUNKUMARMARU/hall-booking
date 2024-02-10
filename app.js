const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const createRoomRouter = require('./routes/createroom');
const bookedRoomRouter = require('./routes/bookRoom');
const bookedRoomListRoute = require('./routes/bookedRoomsList');
const bookedCustomerListRouter = require('./routes/bookedCustomerList');
const singleCustomerRouter = require('./routes/singleCustomer');

app.use('/api', createRoomRouter);
app.use('/api', bookedRoomRouter);
app.use('/api', bookedRoomListRoute);
app.use('/api', bookedCustomerListRouter);
app.use('/api', singleCustomerRouter);

module.exports = app;
