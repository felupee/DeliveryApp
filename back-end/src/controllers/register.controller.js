const registerService = require('../services/register.service');

const postUser = async (req, res) => {
    const newUser = req.body;
    const { code, result } = await registerService.postUser(newUser);
    res.status(code).json(result).end();  
};

module.exports = { 
    postUser,
};