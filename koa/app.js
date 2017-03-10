//https://my.oschina.net/nodeonly/blog/656048
//最新Node.js框架：Koa 2实用入门
// 测试

// 启动执行

// npm i -g runkoa

// runkoa app.js
// runkoa app-async.js     
// runkoa app-generator.js

const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
    const start = new Date();
    return next().then(() => {
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
});

//response
app.use(ctx => {
    ctx.body = 'Hello Koa in app.js';
});

app.listen(3000);