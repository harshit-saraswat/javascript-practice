const express = require('express');

const app=express();

app.get("/",function(req, res){
    console.log(req);
    res.send("Hello, World!");
});

app.listen(3000,function () {
    console.log("Server Started at port 3000");
});