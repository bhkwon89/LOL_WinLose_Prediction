'use strict';
// 먼저 fk를 설정하면 참조할수 없다는 에러가 나와 새로 만듦
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("likes", "user_Id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("likes", "review_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("likes", "content_id", {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addConstraint("likes", {
      fields: ["user_id"],
      allowNull: false,
      onDelete: "CASCADE",
      type: "foreign key",
      references: {
        table: "users", 
        field: "id"
      },
    });

    await queryInterface.addConstraint("likes", {
      fields: ["review_id"],
      allowNull: true,
      onDelete: "CASCADE",
      type: "foreign key",
      references: {
        table: "reviews", 
        field: "id"
      },
    });

    await queryInterface.addConstraint("likes", {
      fields: ["content_id"],
      allowNull: true,
      onDelete: "CASCADE",
      type: "foreign key",
      references: {
        table: "contents", 
        field: "id"
      },
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('likes', 'user_id');
    await queryInterface.removeColumn('likes', 'review_id');
    await queryInterface.removeColumn('likes', 'content_id');
  }
};
