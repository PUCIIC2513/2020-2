'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productsArray = [];

    productsArray.push({
      name: 'Jeans',
      description: 'Azul',
      price: 10000,
      stock: Math.floor(Math.random() * 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    productsArray.push({
      name: 'Tallarines',
      description: 'de espinaca con tomate',
      price: 800,
      stock: Math.floor(Math.random() * 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    productsArray.push({
      name: 'Libro',
      description: '320 páginas',
      price: 5000,
      stock: Math.floor(Math.random() * 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('products', productsArray);
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
