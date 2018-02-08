var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    cors = require('cors'),
    UsersModel = require('./api/models/usersSchema'),
    utils = require('./api/utils/schemaUtils'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/little-big-web-service');

utils.dropSchema();
utils.buildDebugUsers();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));

var routes = require('./api/routes/usersRoutes');
routes(app);

app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


console.log('Little Big Web Service - RESTful API server started on: ' + port);
