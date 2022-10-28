'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('courses', [
    {
      name: 'Desenvolvimento Web Fullstack',
      description: 'Formação em Desenvolvimento Web',
      creation_date: '2022-10-21T00:00:00',
      active: true,
      duration: 12,
      created_at: '2022-10-21T00:00:00',
      updated_at: '2022-10-21T00:00:00',
    },
    {
      name: 'Desenvolvimento Web Front_end',
      description: 'Formação em Desenvolvimento Web',
      creation_date: '2022-10-12T00:00:00',
      active: true,
      duration: 10,
      created_at: '2022-10-12T00:00:00',
      updated_at: '2022-10-12T00:00:00',
    },
    {
      name: 'Desenvolvimento Web Back-end',
      description: 'Formação em Desenvolvimento Web',
      creation_date: '2022-10-29T00:00:00',
      active: true,
      duration: 9,
      created_at: '2022-10-29T00:00:00',
      updated_at: '2022-10-29T00:00:00',
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
