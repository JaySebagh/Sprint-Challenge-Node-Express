// import express
const express = require('express');

// create new http server
const server = express();

server.use(express.json());

// routes
server.get('/', (req, res) => {
    res.send('BEEP BOOP SERVER STATUS: ALIVE');
});

module.exports = server; // exporting the server