var data=require('./greeting.json')
var sayHelloEL=function(){
    console.log(data.el);
}
//sayHelloEL();
module.exports=sayHelloEL;