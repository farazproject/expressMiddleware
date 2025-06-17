// routes/userRoutes.js
// User-related routes

const express = require('express');
const router = express.Router();

const { getUser, createUser } = require('../controllers/userController');

// GET /users/:id - Get user info by ID
router.get('/:id', getUser);

// POST /users - Create a new user
router.post('/', createUser);

module.exports = router; 