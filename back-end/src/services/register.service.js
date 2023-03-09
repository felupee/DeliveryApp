const md5 = require('md5');
const { User } = require('../database/models');
const { tokenCreation } = require('../auth/jwt');

const postUser = async (newUser) => {
    const { name, email, password } = newUser;
    const hash = md5(password);
    const userExists = await User.findOne({ where: { email, name } });
    if (userExists) return { code: 409 };
    await User.create({ ...newUser, password: hash, role: 'customer' });
    const token = tokenCreation({ email, password });
    return { code: 201, result: { name, token } };
};

module.exports = { postUser };
