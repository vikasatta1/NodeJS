let http = require('http')
const {usersController} = require("./usersController");
let {getUsers,addUser} = require('./repository')
let users = [
    {"id": 1, "banned": true, "name": "vika"},
    {"id": 2, "banned": false, "name": "anya"}
];
let cors = (res, req) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false
}


let server = http.createServer((req, res) => {
    if (cors(res, req)) return;

    console.log('some request')
    let message = "Vika"
    switch (req.url) {
        case'/users':
        usersController(req,res)
            break;
        case'/lessons':
            res.write(`tasks`)
            break;
        default:
            res.write("PAGE NOT FOUND")
    }
})
server.listen(7542)
console.log(http)