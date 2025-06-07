"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      // Define associations directly here
      Patient.hasMany(models.Mapping, { foreignKey: "patientId" });
    }
  }
  Patient.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      disease: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
