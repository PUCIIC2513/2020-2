const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('orders', '/:id', async (ctx) => {
  const order = await ctx.db.order.findByPk(ctx.params.id);
  ctx.body = order;
})

router.post('orders.new', '/new', async (ctx) => {
   const body = await ctx.request.body;
   const new_order = await ctx.db.order.create(body);
   ctx.body = new_order;
})

router.patch('orders.update', '/:id', async (ctx) => {
  const body = await ctx.request.body;
  const order = await ctx.db.order.findByPk(ctx.params.id);
  await order.update(body);
})

router.del('orders.delete', '/:id', async (ctx) => {
  const order = await ctx.db.order.findByPk(ctx.params.id);
  await order.destroy();
})

module.exports = router;