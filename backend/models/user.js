'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      dob: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};