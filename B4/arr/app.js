var arr=[];
arr.push(function(){
    console.log("1");
});
arr.push(function(){
    console.log("2");
});
arr.push(function(){
    console.log("3");
});
//arr.push(69);
//c1 
console.log("cách 1");
arr[0]();
arr[2]();
arr[1]();
//console.log(arr[3]);
//c2 với data dữ liệu cùng kiểu
console.log("cách 2");
arr.forEach(function(item){
    item();
});