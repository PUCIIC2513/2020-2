const customerAuth = async (ctx, next) => {
  const authorization = ctx.get('Authorization');
  const token = authorization.replace('Bearer ', '');

  try {
    const customer = await ctx.db.customer.findOne({
      where: {
        token,
      },
    });

    if (customer) {
      ctx.currentCustomer = customer;
      return next(ctx);
    } else {
      ctx.body = { error: 'Debes iniciar sesión' };
    }
  } catch (error) {
    return (ctx.body = { error: 'Debes iniciar sesión' });
  }
};

module.exports = customerAuth;
