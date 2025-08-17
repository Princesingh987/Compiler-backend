// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../Middleware/authMiddleware');
// const { getUsers } = require('../controllers/userController');

// router.get('/users', authMiddleware, getUsers);

// module.exports = router;


const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");
const { getUsers } = require("../controllers/userController");

// /api/users
router.get("/", authMiddleware, getUsers);

module.exports = router;
