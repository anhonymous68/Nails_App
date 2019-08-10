var express = require('express');
var path = require('path');
var morgan = require('morgan');
var router = require('../routes/routes');
var mongoose = require('mongoose');
var config = require('./config');
var bodyParser = require('body-parser');
module.exports.init = function()
{
    mongoose.connect(config.db.uri, {useNewUrlParser: true});
    var app = express();

    app.use(morgan('dev'));

    app.use(bodyParser.json());

    app.use('/', express.static(__dirname + '/../../client'));

    app.use('/api/customer', router);

    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('client/index.html'));
    });



    return app;
};