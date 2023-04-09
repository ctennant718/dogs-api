//this file turns the server on
require('dotenv').config()
const server = require('./server');

const {
PORT=3333,
NODE_ENV='development'
} = process.env

server.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}`);
});