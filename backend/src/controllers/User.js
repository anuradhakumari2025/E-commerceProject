const User = require("../models/user.model");

// Register
exports.registerUser = async (req, res) => {
  try {
    const {username,email,password} = req.body
    if(!username || !email || !password){
      return res.status(400).json({message:"Please fill the required field"})
    }
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({message:`${user.username} logged in successfully!`,user});
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
};

// Get all users (admin use)
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get user by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id)
    .populate("cart.product")
    .populate("wishlist");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// Update user
exports.updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).populate("cart.product")
    .populate("wishlist");
  res.json(updated);
};

// Delete user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};
