const express = require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post("/",function(req, res){
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    var result = num1+num2;
    res.send('<h4>The result of addition is: '+result+'</h4>');
});

app.get("/bmi",function (req, res){
    res.sendFile(__dirname+'/bmiCalc.html');
});

app.post("/bmi",function (req,res) {
    const weight=parseFloat(req.body.weight);
    const height=parseFloat(req.body.height);
    var result=weight/(height*height);
    res.send('<h4>The calculated BMI is: '+result+'</h4>');
});

app.listen(3000,function () {
    console.log("Server Started at port 3000");
});