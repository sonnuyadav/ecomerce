var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema;

var loginSchema = new Schema({
    name: String,
    email: String,
    password: String
    
})

module.exports = mongoose.model('admin', loginSchema,'admin')