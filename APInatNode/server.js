const http = require('http');
const hostname = '127.0.0.1';
const port = 2500;
const url = `http://${hostname}:${port}`

const server = http.createServer((request, response) => {

    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Ola M</h1>');
});

server.listen(port, () => {
    console.log(`Server Running at ${url}` )
})
   