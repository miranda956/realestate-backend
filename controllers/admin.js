const express =require("express");
const db = require("../models");

function router(app){
app.delete("/api/v1/owner/:id", (req, res,next) => {
  db.Owner.destroy({
      where:{
          id:req.params.id
      }
  }).then((result)=>{
      res.json(result)
  }).catch((err)=>{
      next(err)
  })
});

app.post("/api/v1/staff", (req, res,next) => {
  db.Staff.create({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      gender:req.body.gender,
      contact:req.body.contact,
      role:req.body.role,
      password:req.body.password

  }).then((result)=>{
      res.json(result)
  }).catch((err)=>{
      next(err)
  })
});

app.patch("/api/v1/staff/:id",(req,res,next)=>{
    db.Staff.update({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      gender:req.body.gender,
      contact:req.body.contact,
      role:req.body.role

    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        next(err)
    });
})

app.get("/api/v1/staff", (req, res,next) => {
    db.Staff.findAll({

    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        next(err)
    });
  
});

app.get("/api/v1/staff/:id", (req, res,next) => {
  db.Staff.findAll({
      where:{
          id:req.params.id
      }
  }).then((result) => {
      res.json(result)
      
  }).catch((err) => {
      next(err)
  });
});

app.delete("/api/vi/staff/:id", (req, res,next) => {
    db.Staff.destroy({

    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        next(err)
    });
  
});

app.patch("api/vi/admin",(req,res,next)=>{
    db.Admin.update({
        username:req.body.username,
        password:req.body.password
    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        next(err)
    });
})

app.get("/api/v1/admin/:id", (req, res,next) => {
    db.Admin.findAll({
        where:{
            id:req.user.id
        }
    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        next(err)
    });
  
});

}
module.exports=router;
