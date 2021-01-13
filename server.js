// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static('app/public'));

// Routes
// =============================================================
require('./routes/api-routes.js')(app);

// Here we introduce HTML routing to serve different HTML files
require('./routes/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));// Server.js - This file is the initial starting point for the Node/Express server.

