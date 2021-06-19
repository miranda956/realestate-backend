const express =require("express");
const db =require("../models");

function  router(app){
    app.post("/api/v1/client", (req, res,next) => {

        db.Client.create({
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
    app.get("/api/v1/clients", (req, res,next) => {
        db.Client.findAll({})
        .then((data)=>{
            res.json(data)
        }).catch((err)=>{
            next(err)
        })

      
    });
    app.patch("/api/vi/client/:id",(req,res,next)=>{
        db.Client.update({
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

    app.get("/api/v1/client/:id", (req, res,next) => {
        db.Client.findAll({
            where:{
                id:req.user.id
            }
        }).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            next(err)
        })
      
    });











}
module.exports=router;
