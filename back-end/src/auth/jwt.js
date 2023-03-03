const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const jwtKeyPath = path.join(__dirname, '../../jwt.evaluation.key');
const secret = fs.readFileSync(jwtKeyPath, 'utf8');
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const tokenCreation = (payload) => jwt.sign(payload, secret, jwtConfig);

module.exports = { tokenCreation };
