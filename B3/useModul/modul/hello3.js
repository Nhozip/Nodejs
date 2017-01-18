//ko cần khởi tao mes và sayhello luôn
function Nhoizp(){
    this.mes="Xin chào nhozip"
    this.sayhello=function(){
        console.log(this.mes)
    }
}
module.exports=new Nhoizp();
