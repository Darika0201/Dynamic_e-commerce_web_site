const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    img:{
        type: String,
    },
    productname:{
        type: String,
        require: true
    },
    qty:{
        type: Number,
        default:0
    },
    detail:{
        type:String,
    },
    importDate:{
        type:Date,
        required:true,
    },
    category:{
        type:String,
        // required:,
        default:"null",

    },
    price:{
        type:Number,
        required:true,
    }
},{collection:'product'});
module.exports= mongoose.model('product',productSchema);