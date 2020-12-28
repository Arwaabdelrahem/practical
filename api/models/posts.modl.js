var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;


var postSchema = new Schema({
    title : {
        type : String,
        required : true
    }, 
    content : {
        type : String
    }, 
    numberOfLikes : {
        type : Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'

    },
}); 

module.exports = mongoose.model('posts', postSchema);
