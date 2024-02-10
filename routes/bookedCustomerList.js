const express = require('express');

const bookedCustomerListController = require('../controller/bookedCustomersList');
const bookedCustomersListRoute = express();

bookedCustomersListRoute.get('/customerslist', bookedCustomerListController);

module.exports = bookedCustomersListRoute;