var express = require('express');
var app=express();

//hỗ trọ truy cập trực tiếp 
app.use(express.static('public'));

// link with img http://192.168.1.111:port/img/yeah.jpg

//get
app.get("/home",function(req,res){
    res.send("get home")
    console.log("get of home");

})
//post

app.post("/",function(req,res){
    res.send("post home")
    console.log("post of home");
})

//del
app.delete("/del_acc",function(req,res){
    res.send("del acc")
    console.log("del acc");
})

var server = app.listen(777, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})