'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('customers', 'password', {
        type: Sequelize.STRING,
        allowNull: false,
      })
      .then(() => {
        return queryInterface.addColumn('customers', 'token', {
          type: Sequelize.STRING,
        });
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('customers', 'password').then(() => {
      return queryInterface.removeColumn('customers', 'token');
    });
  },
};
