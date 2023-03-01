const { User } = require('../database/models');
const md5 = require('md5');
const { tokenCreation } = require('../auth/jwt');

const postLogin = async (login) => {
    const { email, password } = login;
    const userExists = await User.findOne({ where: {email}});
    const passwordValidation = (userExists.password === md5(password));
    if (!userExists) return { code: 404};
    const token = tokenCreation({ email, password });
    return { code: 200, result: { token  } };
}

module.exports = { postLogin };