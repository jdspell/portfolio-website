const express = require('express');
const http = require('http');

const router = require('./apiContact');

const apiServer = express();
const server = http.createServer(apiServer);

apiServer.use('/', router);

module.exports = server;