'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
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
    ).then(() => {
      // Order hasMany Product
      return queryInterface.addColumn(
        'products', // name of Target model
        'OrderId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'orders', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'orders', // name of Source model
      'customerId' // key we want to remove
    ).then(() => {
      // remove Order hasMany Product
      return queryInterface.removeColumn(
        'products', // name of the Target model
        'OrderId' // key we want to remove
      );
    });
  }
};
