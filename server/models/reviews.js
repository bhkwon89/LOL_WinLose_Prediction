'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    static associate(models) {
      reviews.belongsTo(models.users, { foreignKey: { name: "user_id", allowNull: false }, onDelete: "CASCADE" });
      reviews.hasMany(models.likes, { foreignKey: "review_id"});
      reviews.hasMany(models.comments, { foreignKey: "review_id"});
      reviews.hasMany(models.reviews_contents, { foreignKey: "review_id"});
    }
  };
  reviews.init({
    user_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};