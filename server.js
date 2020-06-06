const http = require('http');
const qs = require('querystring');
const fs = require('fs');
const port = 8888;
const static = require('node-static');
const file = new static.Server('client/build');

let index = "";
fs.readFile("client/build/index.html", (err, data) => {
    index = String(data);
    //console.log(index);
})

http.createServer((request, response) => {
    request.addListener('end', () => {
        file.serve(request, response); 
    }).resume();
    if (request.method === 'POST') {
        console.log('post fired');
        let requestBody = '';
        request.on('data', (data) => {
            requestBody = String(data);
        })
        request.on('end', () => {
            let formData = qs.parse(requestBody)
            console.log(formData)
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(formData.loginUsername + '</br>' + formData.loginPassword);
        })
    }
}).listen(port);

/*console.log(request.url);
response.writeHead(200, 'okyy', {'Content-Type': 'text/html'})
response.end(index); */