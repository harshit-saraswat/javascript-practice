const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

app=express();
app.use(bodyParser.urlencoded(
  { extended:true }
));

app.get("/",function (req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req,res){
    var crypto=req.body.crypto;
    var fiat=req.body.fiat;
    var amt=parseFloat(req.body.amount);
    
    var baseURL="https://apiv2.bitcoinaverage.com/convert/global";
    var options={
        url:baseURL,
        method:"GET",
        headers: {
            'x-ba-key': 'ZDNmYWI2MjIxMmY5NDY5NzkwYTk4OTExNGJiNTIyOTY'
        },
        qs:{
            from:crypto,
            to:fiat,
            amount:amt
        }
    }

    request(options,function(error,response,body){
        var data= JSON.parse(body);
        var price = data.price;
        var currentDate= data.time;

        res.write("<p>The current date is: "+currentDate+"</p>");
        res.write("<h4>The price of "+amt+" "+crypto+" is: "+price+" "+fiat+"</h4>");
        res.send();

    });

});

app.listen(3000, function (){
    console.log("Server is running on port 3000");
})