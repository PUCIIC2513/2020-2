'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ong.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ong',
  });
  return ong;
};