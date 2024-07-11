// /server/controllers/userController.js
const userModel = require('../models/userModel');

const addUser = (req, res) => {
  const { name, mobile, email } = req.body;
  userModel.addUser(name, mobile, email, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('User added');
  });
};

const getUsers = (req, res) => {
  userModel.getUsers((err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(result);
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, mobile, email } = req.body;
  userModel.updateUser(id, name, mobile, email, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User updated');
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User deleted');
  });
};

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
