var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;


var trainSchema = new Schema({
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

module.exports = mongoose.model('Transorts', trainSchema);
