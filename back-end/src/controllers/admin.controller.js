const adminService = require('../services/admin.service');

const postUser = async (req, res) => {
    const newUser = req.body;
    const { code, result } = await adminService.postUser(newUser);
    res.status(code).json(result); 
};

module.exports = { 
    postUser,
};
