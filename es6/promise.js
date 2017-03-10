var promise = new Promise(function (resolve, reject) {
    // some code
    if (true) {
        resolve(value);
    } else {
        reject(error);
    }
})

promise.then(function (value) {
//success
}, function (error) {
//failure
});

function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done')
    })
}

timeout(100).then((value)=>{
    console.log(value);
});

//4.Promise.prototype.catch()
getJson('/posts.josn').then(function(posts){
    //...
}).catch(function(error){

})
//5.Promise.all()
var p=Promise.all([p1,p2,p3]);
//9.2个不用的附加方法
asyncFunc().then(f1).then(f1).dond();
