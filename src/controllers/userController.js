"use strict";
const userService = require("../services/userService");

const getUserById = (req, res) => {
  const { id } = req.params;
  userService
    .getUserById(id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
    });
};

const getUsers = (req, res) => {
  userService
    .getUsers()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
    });
};

const saveUser = (req, res) => {
  const { name, lastName, age } = req.body;
  const user = { name, lastName, age };
  userService
    .saveUser(user)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      console.log(err);
    });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { edit } = req.body;

  userService
    .updateUser(id, edit)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  userService
    .deleteUser(id)
    .then(response => {
      res.status(204).send(response);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  saveUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById
};
