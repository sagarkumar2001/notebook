const mongoose =require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/inotebook";
const connection=()=>{
 const mongoose=require("mongoose")
mongoose.connect(mongoURI)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

}

module.exports=connection;