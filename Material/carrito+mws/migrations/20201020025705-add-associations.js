'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        'orders', // name of Source model
        'customerId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'customers', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
      .then(() => {
        return queryInterface.createTable('products_order', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          productId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'products', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          orderId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'orders', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn(
        'orders', // name of Source model
        'customerId' // key we want to remove
      )
      .then(() => {
        return queryInterface.dropTable('products_order');
      });
  },
};
