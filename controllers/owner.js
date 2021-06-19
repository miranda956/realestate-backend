const express =require("express");
const db = require("../models");

function router(app){

app.get("/api/v1/owner", (req, res,next) => {

   db.Owner.create({
       firstName:req.body.firstName,
       lastName:req.body.lastName,
       email:req.body.email,
       gender:req.body.gender,
       contact:req.body.contact,
       password:req.body.password

   }).then((data)=>{
       res.json(data)
   }).catch((err)=>{
       next(err)
   })
  

});

app.get("/api/v1/owners", (req, res,next) => {
    db.Owner.findAll({})
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        next(err)
    })
  
});

app.get("/api/owner/:id", (req, res) => {
    db.Owner.findAll({
        where:{
            id:req.user.id
        }
    })
  
});

app.patch("/api/v1/owner",(req,res,next)=>{
    db.Owner.update({
       firstName:req.body.firstName,
       lastName:req.body.lastName,
       email:req.body.email,
       gender:req.body.gender,
       contact:req.body.contact
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        next(err)
    })

})
}
module.exports=router;