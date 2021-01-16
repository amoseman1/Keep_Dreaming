require("dotenv").config();
const express = require("express");
const db = require("./models");
const app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("public"));

// handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
