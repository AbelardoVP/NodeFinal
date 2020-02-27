"use strict";
const express = require("express");
const path = require("path");
const index = "./routes/index";
const morgan = require("morgan"); // use it after
const bodyParser = require("body-parser");
require("dotenv").config();

// initializations
const app = (module.exports = express());
require("./database");
// settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile); // para mostrar views (IMPORTANT)
app.set("view engine", "html"); // set engine (IMPORTANT)

// middlewares
app.use(express.static(__dirname + "/controllers")); // para poder llamar controllers
app.use(morgan("dev")); // MORGAN (IMPORTANT)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/", require(index));
