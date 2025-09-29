const jwt = require("jsonwebtoken");
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

function generateToken(userId) {
  return jwt.sign({ userId }, SECRET, { expiresIn: "1h" });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { generateToken, verifyToken };
