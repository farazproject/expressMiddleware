// middlewares/requestLogger.js
// Custom middleware to log HTTP method, URL, and timestamp

module.exports = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
}; 