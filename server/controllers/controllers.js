
var Customer_Model = require('../models/customer_model');

module.exports.Create_Customer = function(req, res)
{


    var newCustomer_Model= new Customer_Model(req.body);

    newCustomer_Model.save(function(error)
    {
        if (error)
        {
            console.log(error);
        }
        else
        {
            res.json(req.body);
        }
    });

};

module.exports.Read_Customer = function(req,res)
{
    //TODO: check if profile is correct to call
    res.json(req.profile);
};

module.exports.Update_Customer = function(req, res)
{
    Customer_Model.findOneAndUpdate({'Account_ID':req.body.Account_ID}, {

        Past_Orders : req.body.Past_Orders.orderID,

        Current_Location : {
            latitude : req.body.Current_Location.latitude,
            longitude : req.body.Current_Location.longitude
        },

        email   : req.body.email
    })


};

module.exports.Delete_Customer = function(req,res)
{
    Customer_Model.deleteOne({Account_ID : req.body.Account_ID}, function(error)
    {
        if (error)
        {
            console.log(error);
        }
        else
        {
            console.log("Deleted ", req.body.Name);
        }
    })
};