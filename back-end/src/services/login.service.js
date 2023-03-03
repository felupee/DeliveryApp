const md5 = require('md5');
const { User } = require('../database/models');
const { tokenCreation } = require('../auth/jwt');

const postLogin = async (login) => {
    const { email, password } = login;
    const userExists = await User.findOne({ where: { email } });
    if (!userExists) return { code: 404 };
    const passwordValidation = (userExists.password === md5(password));
    if (!passwordValidation) return { code: 404 };
    const token = tokenCreation({ email });
    return { code: 200, result: { name: userExists.name, email, role: userExists.role, token } };
};

module.exports = { postLogin };