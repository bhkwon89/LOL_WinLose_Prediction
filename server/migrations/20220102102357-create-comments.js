'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: { 
        allowNull: false, 
        type: Sequelize.INTEGER, 
        onDelete: "CASCADE", 
        references: { 
          model: "users", 
          key: "id"
        }, 
      },
      review_id: { 
        allowNull: false, 
        type: Sequelize.INTEGER, 
        onDelete: "CASCADE", 
        references: { 
          model: "reviews", 
          key: "id"
        }, 
      },
      comment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};