
var express = require('express');
var router = express.Router();
var customer_model_listing = require('../controllers/controllers');

var app = express();

router.route('/:customer_id')
    .get(customer_model_listing.Read_Customer)
    .delete(customer_model_listing.Delete_Customer)
    .put(customer_model_listing.Update_Customer)
;

router.route('/')
    .post(customer_model_listing.Create_Customer);

module.exports = router;