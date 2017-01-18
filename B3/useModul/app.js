var hello1=require('./modul/hello1');
var hello2=require('./modul/hello2').sayHello2;
//hello3 là 1 obj chứ ko phải method
var hello3=require('./modul/hello3');

hello1();
hello2();
hello3.sayhello();


//biến mes được tham chiếu trực tieps thông qua hello3 bới hello3 là 1 obj
hello3.mes="change mes!";

hello3.sayhello();

//hello4 chưa phải 1 obj
var hello4=require('./modul/hello4');
var H4=new hello4();
H4.sayhello();

 var hello5=require('./modul/hello5');
 hello5.sayHello();
//cách thường dùng
// var hello5=require('./modul/hello5').sayHello;
// hello5();