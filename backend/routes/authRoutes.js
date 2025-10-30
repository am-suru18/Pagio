const jwt = require("jsonwebtoken");
const user = require("../models/User");

//Helper: Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc - Register User
// @routes - POST /api/auth/register
// @access - Public
