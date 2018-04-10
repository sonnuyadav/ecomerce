var mongoose = require('mongoose');
Schema = mongoose.Schema;
//var products = new Schema(Schema.Types.Mixed, { strict: false });
var category = new Schema({ catname: String }, { collection: 'category' });
module.exports = mongoose.model('category', category);
