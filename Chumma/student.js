const mongoose=require('mongoose');


//schema
const schema=new mongoose.Schema({
    name: String,
    price : Number,
});

module.exports= mongoose.model('product',schema);

