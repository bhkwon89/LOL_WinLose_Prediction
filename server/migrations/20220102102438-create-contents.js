'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.TEXT
      },
      genres: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      view: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contents');
  }
};