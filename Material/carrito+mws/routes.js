const KoaRouter = require('koa-router');

const orders = require('./routes/orders');
const customers = require('./routes/customers');

const router = new KoaRouter();

router.use('/orders', orders.routes());
router.use('/customers', customers.routes());

module.exports = router;