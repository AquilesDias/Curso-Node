const http = require('http');
const host = "127.0.0.1";
const port = 2000;

const server = http.createServer((resquest, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end("Hello, world!");

});

server.listen(port, () => {
  console.log(` 🚀️ Server Running at http://${host}:${port}`)
});


