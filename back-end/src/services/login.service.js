const { User } = require('../database/models');
const { tokenCreation } = require('../auth/jwt');
const md5 = require('md5');

const postLogin = async (login) => {
    const { email, password } = login;
    const userExists = await User.findOne({ where: {email}});
    const decodedPassword = md5('123456');
    if (!userExists) return { code: 404};
    const token = tokenCreation({ email, password });
    return { code: 200, result: { password: decodedPassword } };
}

module.exports = { postLogin };