const errorMiddleware = (err, _req, res, _next) => {
    if (!err.statusCode) {
      return res.status(500).json({ error: err.message });
    }
  
    const { message, statusCode } = err;
    return res.status(statusCode).json({ error: message });
  };
  
  module.exports = { errorMiddleware };