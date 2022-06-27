'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    static associate(models) {
    /**
    * belongsTo : 1:1 하나만 가질 수 있다.
    */
      likes.belongsTo(models.users, { foreignKey: { name: "user_id", allowNull: false }, onDelete: "CASCADE" });
      likes.belongsTo(models.reviews, { foreignKey: { name: "review_id", allowNull: true }, onDelete: "CASCADE" });
      likes.belongsTo(models.contents, { foreignKey: { name: "content_id", allowNull: true }, onDelete: "CASCADE" });
    }
  };
  likes.init({
    user_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    createdAt: {
      defaultValue : new Date(), type:DataTypes.DATE
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'likes',
  });
  return likes;
};