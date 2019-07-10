const express = require('express');
const app = express();

const Widget = require('./api/models/model');
const Data = require('./api/models/model');
const Info = require('./api/models/model');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/database', { useNewUrlParser: true }); 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/routes');
routes(app);

const port = process.env.PORT || 3000;
app.listen(port);

console.log('RESTful API server started on: ' + port);