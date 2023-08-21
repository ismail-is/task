const mongoose = require('mongoose');
const mongoURL = "mongodb://127.0.0.1/Stock";
const ConnectMongo =async()=>{
    try{
        await mongoose.connect(mongoURL);
        console.log("mongoDB connected..")


    }
    catch(err){
        console.log("mongoDB not connection",err);

    }
}
module.exports=ConnectMongo;