const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const student = require('./student');

const app=express();
app.use(express.json());

app.use(cors());
app.use(bodyparser.json());

//mongo
mongoose.connect('mongodb://localhost:27017/store-db')
.then(() => console.log('mongo connected '))
.catch(err => console.log(err))

app.post('/api/product', async (req,res)=>{
    console.log("up");
  const p = new student(req.body);
  await p.save();
  console.log("saved");

});

app.get('/api/product', async (req,res)=>{
    const p= await student.find();
    res.json(p);
});

app.listen(3000, () => console.log('server running'))






































// const express=require('express');
// const cors=require('cors');
// const bodyparser=require('body-parser');
// const mongoose=require('mongoose');

// const studentroutes = require('./studentroutes');

// const app=express();
// const PORT = 5000;

// //mongo connection
// mongoose.connect('mongodb://localhost:27017/studentdb', {
//     useNewUrlParser:true,
//     useUnifiedTopology :true,
// })
// .then(()=> {
//     console.log("mongo connected");
// })
// .catch((err) => {
//     console.log("mongo not connected");
// })

// //middleware
// app.use(cors());
// app.use(bodyparser.json());


// // app.post('/api/students',(req,res)=> { 
// //     console.log("received ", req.body);
// //     res.json({message:'received', data:req.body});
// // });

// app.use('/api', studentroutes)

// app.listen(5000, ()=> {
//     console.log('server running');
// })
