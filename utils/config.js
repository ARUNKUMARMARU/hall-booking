require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const JWT_TOKEN = process.env.JWT_TOKEN;

module.exports = {
    MONGODB_URI,
    PORT,
    JWT_TOKEN
}

