

var sv={
    name:'nhozp',
    age: 20,
    des :function(){
        console.log('Name : '+this.name+'\nage :'+this.age)
    }
}
sv.des();
//get data with key
console.log('---------get data obj------------')
console.log('get name :'+sv['name'])
console.log('get age :'+sv['age'])
