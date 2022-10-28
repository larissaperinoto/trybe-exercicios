'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('courses', 'duration', {
      allowNull: false,
      type: Sequelize.INTEGER,
      after: 'active'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'duration');
  }
};
