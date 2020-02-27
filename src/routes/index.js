const router = require("express").Router();
const user = require("../controllers/userController");

router.get("/", (req, res) => {
  console.log("Hola Mundo");
  res.render("vista");
});

router.get("/users/", user.getUsers, (req, res) => {
  console.log("===RES", res);
});

router.get("/users/:id", user.getUserById, (req, res) => {
  console.log("===RES", res);
});

router.post("/users", user.saveUser, (req, res, next) => {
  console.log("Hola Mundo saveUser");
});

router.put("/users/:id", user.updateUser, (req, res, next) => {
  console.log("Hola Mundo saveUser");
});

router.delete("/users/:id", user.deleteUser, (req, res, next) => {
  console.log("Hola Mundo saveUser");
});

module.exports = router;
