const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        require:true
    }, 
    password:{
        type: String,
        required: true,
    },
    registerAt:{
        type: String,
        required: true,
    },

}, {collection: 'user'});
module.exports = mongoose.model('user', userSchema);