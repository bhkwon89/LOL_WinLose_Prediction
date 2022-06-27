'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews_contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reviews_contents.belongsTo(models.reviews, { foreignKey: { name: "review_id", allowNull: false }, onDelete: "CASCADE" });
      reviews_contents.belongsTo(models.contents, { foreignKey: { name: "content_id", allowNull: false }, onDelete: "CASCADE" });
    }
  };
  reviews_contents.init({
    review_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER
  }, {
    timestamps: false,
    sequelize,
    modelName: 'reviews_contents',
  });
  return reviews_contents;
};