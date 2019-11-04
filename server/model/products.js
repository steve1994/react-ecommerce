var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: String,
    rate: String,
    description: String,
    price: String,
    brand: String,
    detailProduct: String
})

module.exports = mongoose.model('Product',productSchema);
