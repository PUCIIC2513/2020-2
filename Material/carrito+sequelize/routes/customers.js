const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('customers', '/:id', async (ctx) => {
  const customer = await ctx.db.customer.findByPk(ctx.params.id);
  ctx.body = customer;
})

router.post('customers.new', '/new', async (ctx) => {
   const body = await ctx.request.body;
   const new_customer = await ctx.db.customer.create(body);
   ctx.body = new_customer;
})

router.patch('customers.update', '/:id', async (ctx) => {
  const body = await ctx.request.body;
  const customer = await ctx.db.customer.findByPk(ctx.params.id);
  await customer.update(body);
})

router.del('customers.delete', '/:id', async (ctx) => {
  const customer = await ctx.db.customer.findByPk(ctx.params.id);
  await customer.destroy();
})

module.exports = router;