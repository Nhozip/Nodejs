var Emitter=require('./emitter');
var config=require('./config').event;
var emitter=new Emitter();
emitter.on(config.BAD,function(){
console.log("diểm thấp quá")
});
emitter.on(config.BAD,function(){
console.log("Cần báo cho phụ huynh")
});

emitter.emit(config.BAD);

