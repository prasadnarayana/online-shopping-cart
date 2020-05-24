var express = require('express');
var router = express.Router();

var Product = require("../models/product");

/**
 * @Api to get all the products in the database.
 */
router.get('/get-all-products', function(req, res) {
  Product.find(function (error, products) {
    if (error) {
      res.send({
        success: false,
        err: error
      });
    } else {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0 ; i < products.length ; i += chunkSize) {
        productChunks.push(products.slice(i, i + chunkSize));
      }
      res.send({
        success: true,
        data: productChunks
      });
    }
  });
});

module.exports = router;
