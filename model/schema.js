const mongoose = require('mongoose');
const {Schema} = mongoose;
const productSchema =new Schema({
    pname:{
        type:String
    },
    quantity:{
        type:Number
    },
    price:{
        type:String
    },
    discount:{
        type:Number
    },
    tax:{
        type:Number
    },
    total:{
        type:Number
    },
})
module.exports=mongoose.model("productview",productSchema);