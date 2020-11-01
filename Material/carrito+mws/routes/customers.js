const KoaRouter = require('koa-router');

const customerAuth = require('../middlewares/auth');
const customerGuard = require('../middlewares/customers');

const router = new KoaRouter();

router.get('customers', '/:id', customerAuth, customerGuard, async (ctx) => {
  const { currentCustomer } = ctx;
  ctx.body = currentCustomer;
});

router.post('customers.new', '/new', async (ctx) => {
  const body = await ctx.request.body;
  const new_customer = await ctx.db.customer.create(body);
  ctx.body = new_customer;
});

router.patch(
  'customers.update',
  '/:id',
  customerAuth,
  customerGuard,
  async (ctx) => {
    const { body } = ctx.request;
    const { currentCustomer } = ctx;

    await currentCustomer.update(body);
    ctx.body = currentCustomer;
  }
);

router.del(
  'customers.delete',
  '/:id',
  customerAuth,
  customerGuard,
  async (ctx) => {
    const { currentCustomer } = ctx;

    await currentCustomer.destroy();
    return (ctx.body = { msg: 'Cliente eliminado correctamente' });
  }
);

module.exports = router;
