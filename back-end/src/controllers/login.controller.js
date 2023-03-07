const loginService = require('../services/login.service');

const postLogin = async (req, res) => {
  const login = req.body;
  const { code, result } = await loginService.postLogin(login);
  res.status(code).json(result);  
};

const getAllUser = async (_req, res) => {
  const login = await loginService.getAllUser();
  res.status(200).json(login);
}

module.exports = { 
    postLogin,
    getAllUser,
};
