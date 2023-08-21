 
// const { json } = require('express');
// const { Schema } = require('mongoose');
const productSchema = require('../model/schema');


const Insert =async(req,res)=>{
    try{
        const{pname,quality, price,discount,tax,total}=req.body;
        const data = new productSchema({pname,quality,price,discount,tax,total});
        const total1 =quality * price  / discount + tax;
        const savedata =await data.save();
        console.log("insert succesfully..........");
        console.log(`product name :- ${pname},`);
        console.log(`product quality :-  ${quality},`);
        console.log(`  product price :- ${price}     ("product* quality") = ${quality*price},`);
        console.log(`special discount :- ${discount}  ("                ")  = ${quality*price/discount}`);
        console.log(`product tax      :- ${tax}`);
        console.log(`____________________________________________`)
        console.log(`   TOTAL         =     ${total1}`)
        res.send({savedata});
    }
    catch(err){
        console.log("something error plz chechout" ,err);

    }
}
module.exports=Insert;