let fs = require("fs");
const getUsers = (callback) => {
    return new Promise((res,rej)=>{
        fs.readFile("users.json", function (err,buf){
            res(JSON.parse(buf.toString()))
        });
    });
}
const addUser = (name) => {
    users.push({id:3,name,banned:false})
}
exports.getUsers = getUsers;
exports.addUser = addUser;