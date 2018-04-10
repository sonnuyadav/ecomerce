var mongoose = require('mongoose');
Schema = mongoose.Schema;
//var products = new Schema(Schema.Types.Mixed, { strict: false });
var products = new Schema({ name: String }, { collection: 'product' });
module.exports = mongoose.model('product', products);



