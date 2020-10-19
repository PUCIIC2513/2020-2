'use strict';

var session = require('koa-session');
const koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-body');
//const koaOrm = require('koa-orm')(require('./config/config.js'));

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
  
// ADVERTENCIA WARNING: Fuera de este ejemplo, routers deberían ser llamados desde otro archivo
router.get('koala', '/', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!"
    var n = ctx.session.views || 0;
    ctx.session.views = ++n;
    
    if(n === 1)
       ctx.body = 'Welcome here for the first time!';
    else
       ctx.body = "You've visited this page " + n + " times!";
})

router.get('koala', '/count', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!"
    var n = ctx.session.views || 0;
    ctx.session.views = ++n;
    
    if(n === 1)
       ctx.body = 'Welcome here for the first time!';
    else
       ctx.body = "You've visited this page " + n + " times!";
})

router.get('koala', '/count2', (ctx) => {
    ctx.body = "Welcome! To the Koala Book of Everything!"
    var n = ctx.session.views2 || 0;
    ctx.session.views2 = ++n;
    
    if(n === 1)
       ctx.body = 'Welcome here for the first time!';
    else
       ctx.body = "You've visited this page " + n + " times!";
})

router.get('koala', '/orders/:id', async (ctx) => {

   // const { Orders } = ctx.orm('order');
   // const order = await Orders.findByPk(ctx.params.id);
   const order = await db.order.findAll();
   console.log(order);
   ctx.body = order;

   

});

app.use(router.routes())
    .use(router.allowedMethods())
  
//app.listen(3000, () => console.log('running on port 3000'))

