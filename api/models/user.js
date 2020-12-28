var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name : {
        type : String
    }, 
    age : {
        type : Number
    }, 
    phone : {
        type : String
    },

}); 

module.exports = mongoose.model('users', userSchema);
