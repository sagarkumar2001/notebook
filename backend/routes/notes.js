const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.send({
        a:"gelo",
        number:34
    })
})
module.exports=router;