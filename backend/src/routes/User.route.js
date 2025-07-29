// routes/user.route.js
const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/User");

const router = express.Router();

router.post("/register", registerUser);           // POST /api/users
router.post("/login", loginUser);              // GET /api/users?email=..&password=..
router.get("/all", getAllUsers);         // GET /api/users/all
router.get("/:id", getUserById);         // GET /api/users/:id
router.patch("/:id", updateUser);        // PATCH /api/users/:id
router.delete("/:id", deleteUser);       // DELETE /api/users/:id

module.exports = router;
