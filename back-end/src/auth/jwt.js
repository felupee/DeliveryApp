const jwt = require('jsonwebtoken');

const secret = 'mySecretSignatue';
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const tokenCreation = (payload) => jwt.sign(payload, secret, jwtConfig);

module.exports = { tokenCreation };
