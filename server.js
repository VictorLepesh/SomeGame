const http = require('http');
const qs = require('querystring');
const port = 8000;

http.createServer((request, response) => {
    response.end('test');
}).listen(port);