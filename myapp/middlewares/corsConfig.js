// middlewares/corsConfig.js
// CORS configuration to allow only http://localhost:3000 and GET, POST methods

module.exports = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
}; 