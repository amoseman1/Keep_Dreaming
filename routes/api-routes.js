const db = require("../models");

module.exports = (app) => {
  //GET routes
  //HTML route for rendering homepage with index handlebars file
  app.get("/", (req, res) => {
    db.Destination.findAll({}).then((results) =>
      res.render("index", { results })
    );
  });

  app.get("/api/users", (req, res) => {
    db.Users.findAll({}).then((results) => res.status(200).json(results));
  });

  //API route for DB query after users choices(params) are gathered
  app.get(
    "/api/destinations/:cost_pp/:activity_genre/:activity_type",
    (req, res) => {
      // console.log(req.params);
      db.Destination.findAll({
        where: {
          cost_pp: req.params.cost_pp,
          activity_genre: req.params.activity_genre,
          activity_type: req.params.activity_type,
        },
      }).then((results) => {
        console.log(JSON.parse(JSON.stringify(results)));
        const destObj = {
          destinations: JSON.parse(JSON.stringify(results)),
        };
        res.render("dests", destObj);
      });
    }
  );

  //POST route creates user info for DB
  app.post("/api/users", (req, res) => {
    db.User.create(
      req.body
    ).then((results) => res.status(200).json(results));
  });
};