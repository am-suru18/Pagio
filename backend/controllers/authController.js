const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Helper: Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc - Register User
// @routes - POST /api/auth/register
// @access - Public
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc - Login User
// @routes - POST /api/auth/login
// @access - Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc - GET logged in User
// @routes - GET /api/auth/profile
// @access - Private
exports.getProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc - Update User profile
// @routes - PUT /api/auth/me
// @access - Private
exports.updateUserProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
