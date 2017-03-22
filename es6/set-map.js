

 console.log(111);
debugger;
var ws=new WeakSet();

//Map
// var data={};
// var element=document.getElementById('myDiv');
// data[element]='metadata';
// data['[object HTMLDivElement]'] // "metadata"


var map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined


let set=new Set(['1','2','3','4']);
for(let item of set.entries()){
    console.log(item);
}


set.forEach(x=>console.log(x*2));



