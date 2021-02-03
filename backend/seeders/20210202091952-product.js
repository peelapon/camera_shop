'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'MINOLTA HIMATIC E SILVER',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411340_540x.jpg?v=1608457336',
        price: 4500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CANON NEW F-1 WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411259_360x.jpg?v=1608441815',
        price: 17000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OLYMPUS OM-1 BLACK WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411250_360x.jpg?v=1608441176',
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CONTAX N1 BODY',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296304_360x.jpg?v=1607000385',
        price: 4500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CANON ZOOM LENS FD 24-35MM 1:3.5 L',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296300_360x.jpg?v=1606989831',
        price: 4500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'HASSELBLAD 500C/M A70 FILM BACK',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296274_360x.jpg?v=1606979279',
        price: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PENTAX KM WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55296133_360x.jpg?v=1606913233',
        price: 9500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MAMIYA M645 1000S WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984723_360x.jpg?v=1606390617',
        price: 8500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MINOLTA HIMATIC E SILVER',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__55411340_540x.jpg?v=1608457336',
        price: 5500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'FUJICA G690 WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984718_360x.jpg?v=1606390349',
        price: 12500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PANON WIDELUX F7',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984713_8d0f7e93-3a8d-4533-8bcf-39bd9441807c_360x.jpg?v=1606390076',
        price: 31000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OLYMPUS OM-1 WITH LENS',
        img: 'https://cdn.shopify.com/s/files/1/0082/0654/9051/products/S__54984708_360x.jpg?v=1606389378',
        price: 4500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
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
