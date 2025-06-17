// controllers/userController.js
// Controller functions for user routes

// GET /users/:id
exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    // Dummy user data
    const user = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

// POST /users
exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }
    // Dummy response
    res.status(201).json({
      message: 'User created successfully',
      user: { name, email },
    });
  } catch (error) {
    next(error);
  }
}; 