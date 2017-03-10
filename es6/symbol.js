//原始数据类型
//undefined null bool string array object symbol

let s=Symbol();
typeof s;

let o=Object();
typeof o;

let str=String();

//2作为属性名的Symbol
var mySymbol=Symbol();
// 第1种写法
var a={};
a[mySymbol]='Hello';
// 第2种写法
var a={
    [mySymbol]:'Hello'
};
// 第3种写法
var a={};
Object.defineProperty(a,mySymbol,{value:'Hello'});


let s=Symbol();
let obj={
    [s]:function(arg){
        
    }
};

let obj={
    [s](arg){

    }
}

const color_red=Symbol();
const COLOR_GREEN =Symbol();

//6.实例 模块的Singleton模式
function A(){
    this.foo='Hello';
}
if(!global._foo){
    global._foo=new A();
}
module.exports=global._foo;







