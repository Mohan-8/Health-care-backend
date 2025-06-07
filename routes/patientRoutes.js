const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const authMiddleware = require("../middleware/authMiddleware");

// All patient routes require authentication
router.post("/", authMiddleware, patientController.createPatient);
router.get("/", authMiddleware, patientController.getAllPatients);
router.get("/:id", authMiddleware, patientController.getPatientById);
router.put("/:id", authMiddleware, patientController.updatePatient);
router.delete("/:id", authMiddleware, patientController.deletePatient);

module.exports = router;
