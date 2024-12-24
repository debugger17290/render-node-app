// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getRandomUsers } = require("../controllers/userController");

router.get("/users", getRandomUsers);

module.exports = router;
