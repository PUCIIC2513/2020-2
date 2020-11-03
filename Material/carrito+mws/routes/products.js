const KoaRouter = require('koa-router');

const customerAuth = require('../middlewares/auth');

const router = new KoaRouter();

router.get('products', '/', customerAuth, async (ctx) => {
  const products = await ctx.db.product.findAll();
  ctx.body = products;
});

module.exports = router;
