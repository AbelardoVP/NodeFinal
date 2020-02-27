"use strict";
const User = require("../models/user");

const saveUser = user => {
  const newUser = new User(user); // instanciar modelo

  return newUser
    .save()
    .then(user => {
      // save mongoose method
      return user;
    })
    .catch(err => {
      console.log(err);
    });
};

const getUsers = () => {
  return User.find({}, (err, users) => {
    if (err) {
      res.status(500).send({ message: "Error al encontrar usuario" });
    }
    return users;
  });
};

const getUserById = userId => {
  return User.findById(userId, (err, user) => {
    if (err) {
      res.status(500).send({ message: "Error al encontrar usuario" });
    }
    return user;
  });
};

const updateUser = (userId, edit) => {
  return User.findOne({ _id: userId }, (err, user) => {
    if (err) {
      res.status(500).send({ message: "Error al actualizar el usuario" });
    }
    user.name = edit;
    return user.save();
  });
};

const deleteUser = userId => {
  return User.findByIdAndDelete(userId, (err, userDeleted) => {
    if (err) {
      res.status(500).send({ message: "Error al borrar el usuario" });
    }
    return userDeleted;
  });
};

module.exports = {
  saveUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers
};
