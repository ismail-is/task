const mongoose = require('mongoose');
const {Schema}=mongoose;
const curdSchema=new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})
module.exports=mongoose.model("product",curdSchema)