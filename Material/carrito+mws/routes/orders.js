const KoaRouter = require('koa-router');

const customerAuth = require('../middlewares/auth');
const { orderGuard, validateStock } = require('../middlewares/orders');

const router = new KoaRouter();

router.get('orders', '/:id', customerAuth, orderGuard, async (ctx) => {
  const { currentOrder } = ctx;

  ctx.body = currentOrder;
});

router.post('orders.new', '/new', customerAuth, async (ctx) => {
  const { currentCustomer } = ctx;
  const { body } = ctx.request;

  const order = await currentCustomer.createOrder(body);

  ctx.body = order;
});

router.post(
  'orders.add',
  '/:id/add',
  customerAuth,
  orderGuard,
  validateStock,
  async (ctx) => {
    const { currentOrder } = ctx;
    const { products } = ctx.request.body;

    await Promise.all(products.map(async (productId) => {
      const product = await ctx.db.product.findByPk(productId);
      await product.update({ stock: product.stock - 1 });
      await currentOrder.addProduct(product);
    }));

    const orderProducts = await currentOrder.getProducts();
    ctx.body = { order: currentOrder, products: orderProducts };
  }
);

router.patch('orders.update', '/:id', customerAuth, orderGuard, async (ctx) => {
  const { currentOrder } = ctx;
  await currentOrder.update(body);
  ctx.body = currentOrder;
});

router.del('orders.delete', '/:id', customerAuth, orderGuard, async (ctx) => {
  const { currentOrder } = ctx;
  await currentOrder.destroy();
  ctx.body = currentOrder;
});

module.exports = router;
