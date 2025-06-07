"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      // Define association directly here
      Doctor.hasMany(models.Mapping, { foreignKey: "doctorId" });
    }
  }
  Doctor.init(
    {
      name: DataTypes.STRING,
      specialization: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );
  return Doctor;
};
