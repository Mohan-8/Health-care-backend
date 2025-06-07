const express = require("express");
const router = express.Router();
const mappingController = require("../controllers/mappingController");
const authMiddleware = require("../middleware/authMiddleware");

// All mapping routes require authentication
router.post("/", authMiddleware, mappingController.assignDoctor);
router.get("/", authMiddleware, mappingController.getAllMappings);
router.get(
  "/:patientId",
  authMiddleware,
  mappingController.getDoctorsByPatient
);
router.delete("/:id", authMiddleware, mappingController.removeMapping);

module.exports = router;
