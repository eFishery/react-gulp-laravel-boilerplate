'use strict';

require('babel/register')({});

var server = require('./server');
var port = require('./config').nodePort;

const PORT = process.env.PORT || port;

server.listen(PORT, function () {
  console.log('Server listening on: ' + PORT);
});
