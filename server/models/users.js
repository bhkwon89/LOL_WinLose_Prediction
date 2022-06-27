'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
    /** FK 입력
    * hasMany : 1:N, 여러개를 가질 수 있다.(제공하면 이녀석)
    * belongsTo : 1:1 하나만 가질 수 있다.(참조하면 이녀석)
    * targetKey : 정의되어있지 않다면 기본값으로 user 모델의 주요 키를 가리킵니다.
    */ 
      users.hasMany(models.likes, { foreignKey: "user_id"});
      users.hasMany(models.reviews, { foreignKey: "user_id"});
      users.hasMany(models.comments, { foreignKey: "user_id"});
    }
  };
  users.init({
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    socialtype: DataTypes.STRING,
    admin: {
      defaultValue : false, type: DataTypes.BOOLEAN
    },
    user_picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};