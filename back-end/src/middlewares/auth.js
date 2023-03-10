const jwt = require('jsonwebtoken');
const { CustomError } = require('../utils/CustomError');
const { secret } = require('../auth/jwt');

const auth = (req, _res, next) => {
  const token = req.headers.authorization;
  console.log(req);
  if (!token) throw new CustomError('Token not found', 404);

  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    throw new CustomError(err.message, 401);
  }
};

module.exports = { auth };