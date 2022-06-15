'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Lists', [{
     title: 'Понять фетчи',
     status: 'Не сделано',
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Lists', null, {});
  }
};
