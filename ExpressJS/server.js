const express = require('express');

const app=express();

app.get("/",function(req, res){
    console.log(req);
    res.send("Hello, World!");
});

app.get("/contact",function(req, res){
    res.send("Contact me at: contactharshitsaraswat@gmail.com");
});

app.get("/about",function(req, res){
    res.send("Developed By: Harshit Saraswat (harshit-saraswat)");
});

app.listen(3000,function () {
    console.log("Server Started at port 3000");
});