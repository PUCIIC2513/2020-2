const customerGuard = async (ctx, next) => {
  const { currentCustomer } = ctx;

  if (currentCustomer.dataValues.id.toString() !== ctx.params.id) {
    return (ctx.body = {
      error: 'No puedes ver/modificar información de otros clientes',
    });
  }

  return next(ctx);
};

module.exports = customerGuard;
