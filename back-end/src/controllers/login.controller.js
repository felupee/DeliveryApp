const loginService = require('../services/login.service');

const postLogin = async(req, res) => {
    const login = req.body;
    const { code, result } = await loginService.postLogin(login);
    res.status(code).json(result);  
}

module.exports = { 
    postLogin,
};