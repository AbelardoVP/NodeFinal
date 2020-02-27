"use strict";

const mongoose = require("mongoose");
const app = require("./server");

const { mongodb } = require("./keys");

// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
//mongodb.URI

mongoose
  .connect(mongodb.URI, { useNewUrlParser: true })
  .then(() => {
    // Cuando se realiza la conexión, lanzamos este mensaje por consola

    console.log("La conexión a MongoDB se ha realizado correctamente!!");

    app.listen(app.get("port"), () => {
      console.log("server on port", app.get("port"));
    });
  })
  .catch(err => console.log(err));
