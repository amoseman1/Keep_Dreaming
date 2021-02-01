require("dotenv").config();
const express = require("express");
const db = require("./models");
const app = express();
const exphbs = require("express-handlebars");
const mysql = require("mysql");
herok

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Starts the server to begin listening, and syncs our sequelize models to our DB
// =============================================================

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
