// import express
const express = require('express');

const actionRouter = require('./data/action/action-router.js');
const projectRouter = require('./data/project/project-router.js');

// create new http server
const server = express();

server.use(express.json());
server.use('/api/action', actionRouter);
server.use('/api/project', projectRouter);

// routes
server.get('/', (req, res) => {
    res.send('BEEP BOOP SERVER STATUS: ALIVE');
});

module.exports = server; // exporting the server