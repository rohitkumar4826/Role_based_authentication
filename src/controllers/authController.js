const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const register = async (req, res) => {
    try {
      const { username, password, role } = req.body;
  
      // Validate input
      if (!username || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Validate role
      const validRoles = ["admin", "manager", "user"];
      if (!validRoles.includes(role)) {
        return res.status(400).json({ message: "Invalid role provided" });
      }
  
      // Check if user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
  
      // Hash password and save new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword, role });
      await newUser.save();
  
      res.status(201).json({
        message: "User registered successfully",
        user: { username, role },
      });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
};  
  

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ message: `User with username ${username} not found` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: `Invalid credentials` });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  register,
  login,
};
