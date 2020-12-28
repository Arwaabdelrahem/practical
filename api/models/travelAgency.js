var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;


var travelSchema = new Schema({
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

module.exports = mongoose.model('Agencys', travelSchema);
