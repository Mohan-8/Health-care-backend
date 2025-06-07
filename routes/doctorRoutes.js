const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");
const authMiddleware = require("../middleware/authMiddleware");

// POST, PUT, DELETE require authentication; GET is public
router.post("/", authMiddleware, doctorController.createDoctor);
router.get("/", doctorController.getAllDoctors);
router.get("/:id", doctorController.getDoctorById);
router.put("/:id", authMiddleware, doctorController.updateDoctor);
router.delete("/:id", authMiddleware, doctorController.deleteDoctor);

module.exports = router;
