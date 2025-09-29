
const bcrypt = require("bcrypt");
const authService = require("../services/authService");
const { generateToken } = require("../utils/token");
const { logError } = require("../utils/logger");
const wrapAsync = require("../utils/wrapAsync");


const signup = wrapAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await authService.createUser(email, hashedPassword);
    res.status(201).json({ message: "User created successfully", userId: user.id });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT') {
      return res.status(400).json({ error: "Email already exists" });
    }
    logError("Failed to sign up user", err);
    res.status(500).json({ error: "Failed to sign up" });
  }
});

const login = wrapAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await authService.findUserByEmail(email);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });
  const token = generateToken(user.id);
  res.json({ token });
});

module.exports = { signup, login };
