const orderGuard = async (ctx, next) => {
  const { currentCustomer } = ctx;
  const customerId = currentCustomer.dataValues.id;

  try {
    const order = await ctx.db.order.findByPk(ctx.params.id);

    if (customerId !== order.customerId) {
      return (ctx.body = {
        error: 'No puedes ver/modificar ordenes de otros clientes',
      });
    }

    ctx.currentOrder = order;
    return next(ctx);
  } catch (error) {
    return (ctx.body = {
      error: 'No existe una orden con el id especificado',
    });
  }
};

const validateStock = async (ctx, next) => {
  const { products } = ctx.request.body;

  const declinedProducts = [];

  await Promise.all(
    products.map(async (productId) => {
      const product = await ctx.db.product.findByPk(productId);
      if (product.dataValues.stock <= 0) {
        declinedProducts.push(productId);
      }
    })
  );

  if (declinedProducts.length > 0) {
    return (ctx.body = {
      error:
        'No se ha podido crear la orden algunos productos no tienen suficiente stock',
      declinedProducts,
    });
  }

  return next(ctx);
};

module.exports = { orderGuard, validateStock };
