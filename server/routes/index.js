var express = require('express');
var router = express.Router();

var productController = require('../controllers/productController.js')

router.get('/', function (req,res) {
	res.redirect('/products');
});

module.exports = router;
