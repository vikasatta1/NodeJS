/*const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

let http = require('http')
let server = http.createServer((req, res) => {
    console.log('some request')
    res.end()
})
server.listen(7542)
console.log(http)