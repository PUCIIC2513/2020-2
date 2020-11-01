const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const KoaRouter = require('koa-router');

const customerAuth = require('../middlewares/auth');

const router = new KoaRouter();


const TOKEN_SECRET = 'este es un secreto, no se lo cuentes a nadie!!';
router.post('login', '/login', async (ctx) => {
  const { body } = ctx.request;
  const { email, password } = body;

  const customer = await ctx.db.customer.findOne({
    where: {
      email,
    },
  });

  if (customer) {
    if (bcrypt.compareSync(password, customer.password)) {
      const token = jwt.sign({ email }, TOKEN_SECRET);
      await customer.update({ token });
      ctx.body = {
        msg: 'Has iniciado sesión correctamente',
        customer: { token, email },
      };
    } else {
      ctx.body = { error: 'Contraseña invalida' };
    }
  } else {
    ctx.body = { error: 'No existe un cliente con ese email' };
  }
});

router.delete('logout', '/logout', customerAuth, async (ctx) => {
  const { currentCustomer } = ctx;

  currentCustomer.update({ token: null });
  ctx.body = { msg: 'Sesión cerrada correctamente' };
});

module.exports = router;
