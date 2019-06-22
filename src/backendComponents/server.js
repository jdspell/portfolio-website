const express = require('express');
const cors = require('cors');

const router = require('./apiContact');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({
    extended: false
}));

server.use('/', router);

module.exports = server;