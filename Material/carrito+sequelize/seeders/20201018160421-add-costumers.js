'use strict';

module.exports = {
  up: async (queryInterface) => {

    const costumers_array = [];

    costumers_array.push({
      name: 'Juan',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    costumers_array.push({
      name: 'Fernanda',
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return queryInterface.bulkInsert('costumers', costumers_array);
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
