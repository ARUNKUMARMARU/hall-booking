const express = require('express');
const singleCustomerController = require('../controller/singleCustomer');

const singleCustomerRouter = express.Router();

singleCustomerRouter.get('/singlecustomer/:name', singleCustomerController);

module.exports = singleCustomerRouter;