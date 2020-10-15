'use strict';

var session = require('koa-session');
const koa = require('koa')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

app.keys = ['Shh, its a secret!'];
app.use(session(app));  // Include the session middleware

router.get('koala', '/', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!"
    var n = ctx.session.views || 0;
    ctx.session.views = ++n;
    
    if(n === 1)
       ctx.body = 'Welcome here for the first time!';
    else
       ctx.body = "You've visited this page " + n + " times!";
})

app.use(router.routes())
    .use(router.allowedMethods())
  
app.listen(3000, () => console.log('running on port 3000'))