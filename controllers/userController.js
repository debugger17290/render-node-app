// controllers/userController.js
const { getTwoRandomUsers } = require("../services/userService");

// Controller to handle /api/users route
const getRandomUsers = (req, res) => {
  const users = getTwoRandomUsers();
  res.json(users);
};

module.exports = { getRandomUsers };
