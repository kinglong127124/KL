var express = require('express');
var fs=require("fs");
var app = express();

//方法1：通过express.static访问静态文件，这里访问的是ajax.html
 app.use(express.static("./public/"));

//方法2：使用fs.readFile打开html文件
// app.get("index.html", function(request, response) {
//     debugger;
//    fs.readFile("./"+request.path.substr(1),function(err,data){
//         // body
//         if(err){
//             console.log(err);
//             //404：NOT FOUND
//             response.writeHead(404,{"Content-Type":"text/html"});
//         }
//         else{
//             //200：OK
//             response.writeHead(200,{"Content-Type":"text/html"});
//             response.write(data.toString());
//         }
//         response.end();
//     });
// });

app.listen(3002, function() {   //监听http://127.0.0.1:3002端口
    console.log("server start");
});