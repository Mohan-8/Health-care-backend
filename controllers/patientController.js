const { Patient } = require("../models");

exports.createPatient = async (req, res) => {
  try {
    const { name, age, disease } = req.body;
    const patient = await Patient.create({
      name,
      age,
      disease,
      userId: req.user.userId,
    });
    res.status(201).json(patient);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create patient.", error: err.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({
      where: { userId: req.user.userId },
    });
    res.json(patients);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve patients.", error: err.message });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.userId },
    });
    if (!patient)
      return res.status(404).json({ message: "Patient not found." });
    res.json(patient);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve patient.", error: err.message });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { name, age, disease } = req.body;
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.userId },
    });
    if (!patient)
      return res.status(404).json({ message: "Patient not found." });

    await patient.update({ name, age, disease });
    res.json(patient);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update patient.", error: err.message });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.userId },
    });
    if (!patient)
      return res.status(404).json({ message: "Patient not found." });

    await patient.destroy();
    res.json({ message: "Patient deleted successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete patient.", error: err.message });
  }
};
