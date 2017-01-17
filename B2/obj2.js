var SV={
    name:'nhozp',
    age: 20,
    des :function(){
        console.log('Name : '+this.name+'\nage :'+this.age)
    }
}

// var SV={
//     name:'nhozp',
//     age: 20,
//     des :function(){
//         return 'Name : '+this.name+'\nage :'+this.age;
//     }
// }

var chien=Object.create(SV);
chien.name="Chiến";
chien.age=20;


var huyen=Object.create(SV);
huyen.name="Huyền";
huyen.age=20;

chien.des();
huyen.des();

