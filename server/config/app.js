
var express = require('./express.js');
var config = require('./config.js');

module.exports.start = function ()
{
    var app = express.init();

    app.listen(config.port, function()
    {
        console.log("Listening to port ", config.port);
    });
};