'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    static associate(models) {
      comments.belongsTo(models.users, { foreignKey: { name: "user_id", allowNull: false }, onDelete: "CASCADE" });
      comments.belongsTo(models.reviews, { foreignKey: { name: "review_id", allowNull: false }, onDelete: "CASCADE" });
    }
  };
  comments.init({
    user_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};