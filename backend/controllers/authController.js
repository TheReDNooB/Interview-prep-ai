const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// generate JWT token
const generateToken = (userid) => {
  return jwt.sign({ id: userid }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc    register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
};

// @desc    login a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
};

// @desc    get an user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
};

module.exports = { registerUser, loginUser, getUserProfile };