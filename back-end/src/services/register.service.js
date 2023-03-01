const md5 = require('md5');
const { User } = require('../database/models');
const { tokenCreation } = require('../auth/jwt');

const postUser = async (newUser) => {
    const { email, password } = newUser;
    const hash = md5(password);
    const userExists = await User.findOne({ where: { email } });
    if (userExists) return { code: 409 };
    await User.create({...newUser, password: hash});
    const token = tokenCreation({ email, password });
    return { code: 201, result: { token } };
};

module.exports = { postUser };