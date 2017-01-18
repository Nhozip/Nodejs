function Emitter(){
    this.events={}
}

//lắng nghe
Emitter.prototype.on=function(type,listener){
    this.events[type]=this.events[type]|| []
    this.events[type].push(listener);
}
//phát ra
Emitter.prototype.emit=function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}
module.exports=Emitter;