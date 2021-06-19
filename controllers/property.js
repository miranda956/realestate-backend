const express =require("express");
const db = require("../models");

function router(app){

    app.post("/api/vi/property", (req, res) => {
        db.Property.create({
            propertyName:req.body.propertyName,
            category:req.body.category,
            propertySize:req.body.propertySize,
            Rooms:req.body.Rooms,
            propertyPrice:req.body.propertyPrice,
            buildYear:req.body.buildYear,
            location:req.body.location,
            description:req.body.description

        })
      
    });

    app.get("/api/v1/property/:id", (req, res,next) => {
        db.Property.findAll({

        }).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            next(err)
        })
      
    });

    app.get("/api/vi/properties", (req, res,next) => {
      db.Property.findAll({

      }).then((result) => {
          res.json(result)
          
      }).catch((err) => {
          next(err)
      });
    });

   app.patch("/api/v1/property",(req,res,next)=>{
       db.Property.update({
        propertyName:req.body.propertyName,
        category:req.body.category,
        propertySize:req.body.propertySize,
        Rooms:req.body.Rooms,
        propertyPrice:req.body.propertyPrice,
        buildYear:req.body.buildYear,
        location:req.body.location,
        description:req.body.description
       }).then((result)=>{
           res.json(result)
       }).catch((err)=>{
           next(err)
       })
   });
   
   app.delete("/api/vi/property",(req,res,next)=>{
       db.Property.destroy({
           where:{
               id:req.params.id
           }
       }).then((result) => {
           res.json(result)
       }).catch((err) => {
           next(err)
       });
   })
}

module.exports=router;

/*
allow location input codinates
images 

*/
