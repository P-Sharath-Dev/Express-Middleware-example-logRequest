const express = require('express');
const server = express();

const logRequest = (req, res, next)=>{
    console.log(req.method);
    console.log(req.path);
    next();
};
server.use(logRequest);

server.get('/', (req,res)=>{
    res.send('logged in');
});

module.exports = server;