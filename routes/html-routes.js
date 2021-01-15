// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // Index route loads view.html
  router.get(
    "/",
    (req, res) =>
      db.Destination.all((data) => {
        const hbsObject = {
          question: data,
        };

        res.render("index", hbsObject);
      })

    // res.sendFile(path.join(__dirname, "../views"))
  );
  // Add route loads the add.html page,
  // Where users can enter new characters to the db
  // app.get("/add", (req, res) =>
  //   res.sendFile(path.join(__dirname, "../public/add.html"))
  // );
  // // All route loads the all.html page,
  // // Where all characters in the db are displayed
  // app.get("/all", (req, res) =>
  //   res.sendFile(path.join(__dirname, "../public/all.html"))
  // );
};
