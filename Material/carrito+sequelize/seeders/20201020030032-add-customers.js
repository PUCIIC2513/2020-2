'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customers_array = [];

    customers_array.push({
      name: 'Juan',
      email: 'j@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    customers_array.push({
      name: 'Fernanda',
      email: 'f@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return queryInterface.bulkInsert('customers', customers_array);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
