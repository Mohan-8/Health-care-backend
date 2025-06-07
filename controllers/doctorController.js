const { Doctor } = require("../models");

exports.createDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;
    const doctor = await Doctor.create({ name, specialization });
    res.status(201).json(doctor);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create doctor.", error: err.message });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve doctors.", error: err.message });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found." });
    res.json(doctor);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve doctor.", error: err.message });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found." });

    const { name, specialization } = req.body;
    await doctor.update({ name, specialization });
    res.json(doctor);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update doctor.", error: err.message });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found." });

    await doctor.destroy();
    res.json({ message: "Doctor deleted successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete doctor.", error: err.message });
  }
};
