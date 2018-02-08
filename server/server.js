var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    UsersModel = require('./api/models/usersSchema'),
    utils = require('./api/utils/schemaUtils');

var httpServerPort = process.env.PORT || 3000;
var httpsServerPort = 8443;
var httpsPrivateKey = fs.readFileSync('./api/utils/little-big-web-service.key', 'utf8');
var httpsCertificate = fs.readFileSync('./api/utils/little-big-web-service.cert', 'utf8');
var httpsCredentials = { key: httpsPrivateKey, cert: httpsCertificate };
var httpServer = http.createServer(app);
var httpsServer = https.createServer(httpsCredentials, app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/little-big-web-service');
utils.dropSchema();
utils.buildDebugUsers();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));

var routes = require('./api/routes/usersRoutes');
routes(app);

httpServer.listen(httpServerPort);
httpsServer.listen(httpsServerPort);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

console.log('Little Big Web Service - RESTful API');
console.log('HTTP server started on: ' + httpServerPort);
console.log('HTTPS server started on: ' + httpsServerPort);
