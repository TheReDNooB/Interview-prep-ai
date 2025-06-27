const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controllers/authController");
const { project } = require("../middlewares/authMiddleware");

const router = express.Router();

//Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", project, getUserProfile);

module.exports = router;