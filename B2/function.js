//test modul
var testModul=function(){

    console.log("testModul  !")
};
module.exports=testModul;

function sayHello(){
    console.log("xin chào ")
}
sayHello()
//first -class function gọi 1 mehtod khác trong 1 class
function firstClass(fn){
    //không gọi fn() sẽ first vô nghĩa
    fn();

}
firstClass(sayHello)

firstClass(function() {
    console.log("bái bai nhanh")
});

// function expresstion
var sayGoodBye=function fSayGoodBye(){
    console.log("bái bai1")
}

// function expresstion
var sayGoodBye=function(){
    console.log("bái bai2")
}

//sayGoodBye trở thành phương thức  
//gọi qua fSayGoodBye() là sai
sayGoodBye()
//fSayGoodBye()

//thực thi ngay sau khi method được tạo
 test="chiến";
(function test(test){
    console.log(test);
    
}("bye"));
console.log(test);




