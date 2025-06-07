"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mapping extends Model {
    static associate(models) {
      // Define associations here directly inside the associate method
      Mapping.belongsTo(models.Doctor, { foreignKey: "doctorId" });
      Mapping.belongsTo(models.Patient, { foreignKey: "patientId" });
    }
  }
  Mapping.init(
    {
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Mapping",
    }
  );
  return Mapping;
};
