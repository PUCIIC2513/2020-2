'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('costumers', [
      {
        name: 'Eduardo Martínez',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

    const costumers = await queryInterface.sequelize.query(`SELECT id FROM public.costumers`);
    const costumers_ids = costumers[0];

    await queryInterface.bulkInsert('orders', [
      {
        name: 'orden 1',
        description: 'productos varios',
        costumerId: costumers_ids[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});


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
