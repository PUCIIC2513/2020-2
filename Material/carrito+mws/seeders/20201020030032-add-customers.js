'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const customersArray = [];

    customersArray.push({
      name: 'Juan',
      email: 'j@uc.cl',
      password: bcrypt.hashSync('password', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    customersArray.push({
      name: 'Fernanda',
      email: 'f@uc.cl',
      password: bcrypt.hashSync('password', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('customers', customersArray);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
