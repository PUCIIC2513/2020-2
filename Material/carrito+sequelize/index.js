'use strict';

var session = require('koa-session');
const koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-body');
const routes = require('./routes');

const app = new koa()
const router = new koaRouter()

app.keys = ['Shh, its a secret!'];
app.use(session(app));  // Include the session middleware

const db = require('./models');

const PORT = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, (err) => {
      if (err) {
        return console.error('Failed', err);
      }
      console.log(`Listening on port ${PORT}`);
      return app;
    });
  })
  .catch((err) => console.error('Unable to connect to the database:', err));

app.use(koaBody());
app.context.db = db
app.use(routes.routes())

// ADVERTENCIA WARNING: Fuera de este ejemplo, routers deberían ser llamados desde otro archivo
router.get('carrito', '/', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!"
    var n = ctx.session.views || 0;
    ctx.session.views = ++n;
    
    if(n === 1)
       ctx.body = 'Welcome here for the first time!';
    else
       ctx.body = "You've visited this page " + n + " times!";
})

router.get('carrito', '/count', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!"
    var n = ctx.session.views || 0;
    ctx.session.views = ++n;
    
    if(n === 1)
       ctx.body = 'Welcome here for the first time!';
    else
       ctx.body = "You've visited this page " + n + " times!";
})

router.get('carrito', '/count2', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!"
    var n = ctx.session.views2 || 0;
    ctx.session.views2 = ++n;
    
    if(n === 1)
       ctx.body = 'Welcome here for the first time!';
    else
       ctx.body = "You've visited this page " + n + " times!";
})

app.use(router.routes())
  
// app.listen(3000, () => console.log('running on port 3000'))