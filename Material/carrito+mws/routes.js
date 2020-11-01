const KoaRouter = require('koa-router');

const auth = require('./routes/auth');
const customers = require('./routes/customers');
const products = require('./routes/products');
const orders = require('./routes/orders');

const router = new KoaRouter();

router.use('/auth', auth.routes());
router.use('/customers', customers.routes());
router.use('/products', products.routes());
router.use('/orders', orders.routes());

module.exports = router;
