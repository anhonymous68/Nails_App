var mongoose = require('Mongoose');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    Account_ID : String,

    userName : String,

    Password    : String,

    Name   : String,

    Past_Orders : [{orderID : String}],

    Current_Location : {latitude : Number, longitude : Number},

    email   : String,

    CreateAt    : Date,

    UpdateAt    : Date
});

customerSchema.pre("save", function(next)
{
    if (error)
    {
        console.log(error);
    }

    var thisTime = new Date();

    if (!this.CreateAt)
    {
        this.CreateAt = thisTime;
    }

    this.UpdateAt = thisTime;

    next();
});

var customer_model = mongoose.model('customer_model',customerSchema);

module.exports = customer_model;