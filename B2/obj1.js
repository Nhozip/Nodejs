function SV(name,age){
    this.name=name;
    this.age=age;
}

//giống get trong java
SV.prototype.getName=function(){
    return this.name;
}
SV.prototype.getAge=function(){
    return this.age;
}
var sv=new SV("nhozip",96)

console.log('data :'+sv.getName());
console.log('data :'+sv.getAge());

// fail console.log('data :'+sv.toString());