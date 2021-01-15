//get, post, put, delete routes
const db = require('../models');

module.exports = (app) => {
    //GET routes
    app.get('/api/users', (req, res) => {
        db.Users.findAll({}).then((results) => res.status(200).json(results));
    });

    app.get('/api/destinations/:location/:activiy_genre/:activity_type', (req, res) => {       ///res.render --> handlebars
        db.Destinations.findAll({}).then((results) => res.status(200).json(results));
    });  
//     findOne({where { location: req.params.location,
//     activity_genre: req.params.activity_genre,
//     activity_type: req.params.activity_type,
//   }})  

    app.get('/api/activitygenres', (req, res) => {
        db.Activitygenres.findAll({}).then((results) => res.status(200).json(results));
    });


    //POST route creates user info for DB
    app.post('/api/users', (req, res) => {
        db.User.create({
            username: req.body.username,
            email: req.body.email
        }).then((results) => res.status(200).json(results));
    });

    //POST route creates destination choice for DB
    app.post('/api/destinations', (req, res) => {
        db.Destination.create({
            location: req.body.location,
            cost: req.body.cost
        }).then((results) => res.status(200).json(results));
    });

    //POST route creates activity choice in DB
    app.post('/api/activitygenres', (req, res) => {
        db.ActivityGenre.create({
            active: req.body.active,
            adrenaline: req.body.adrenaline,
            volunteering: req.body.volunteering,
            partying: req.body.partying,
            spiritual: req.body.spiritual,
            cultural: req.body.cultural,
        }).then((results) => res.status(200).json(results));
    });
};