'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const products_array = [];

    products_array.push({
      name: 'Jeans',
      description: 'Azul',
      price: 10000,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    products_array.push({
      name: 'Tallarines',
      description: 'de espinaca con tomate',
      price: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    products_array.push({
      name: 'Libro',
      description: '320 páginas',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return queryInterface.bulkInsert('products', products_array);
    
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
