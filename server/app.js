const express = require("express");
   
const app = express();
   
const jsonParser = express.json();
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
   next();  
 });
  
app.post("/postuser", jsonParser, function (request, response) {
 
    if(!request.body) return response.sendStatus(400);
     
    let username = request.body.name;
    let userage = request.body.age;
    userage = userage + 10;
     
    response.json({"name": username, "age": userage});
});
  
app.listen(3000);