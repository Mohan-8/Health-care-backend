const { Mapping, Doctor } = require("../models");

exports.assignDoctor = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;
    const mapping = await Mapping.create({ patientId, doctorId });
    res.status(201).json(mapping);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to assign doctor.", error: err.message });
  }
};

exports.getAllMappings = async (req, res) => {
  try {
    const mappings = await Mapping.findAll();
    res.json(mappings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch mappings.", error: err.message });
  }
};

exports.getDoctorsByPatient = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    console.log("Fetching doctors for patient:", patientId);

    const mappings = await Mapping.findAll({
      where: { patientId },
      include: [{ model: Doctor }],
    });

    console.log("Mappings found:", mappings.length);
    res.json(mappings);
  } catch (err) {
    console.error("Error fetching mappings:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch mappings.", error: err.message });
  }
};

exports.removeMapping = async (req, res) => {
  try {
    // console.log("Request params:", req.params);
    const mapping = await Mapping.findByPk(req.params.id);
    if (!mapping) {
      console.log("Mapping not found");
      return res.status(404).json({ message: "Mapping not found." });
    }

    await mapping.destroy();
    console.log("Mapping deleted");
    res.json({ message: "Mapping removed successfully." });
  } catch (err) {
    console.error("Delete mapping error:", err);
    res
      .status(500)
      .json({ message: "Failed to remove mapping.", error: err.message });
  }
};
