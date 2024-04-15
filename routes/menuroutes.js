const express = require('express');
const  router = express.Router();
const menuItem = require('./../models/menuItem');
const { route } = require('./personroutes');


// POST MENU INSIDE DB 
router.post('/', async (req,res)=>{
    try{
      const data = req.body;
      const newMenu = new menu(data);
      const savedMenu = await newMenu.save();
     console.log("menu saved ");
     res.status(200).json(savedMenu);
    }catch(err){
      console.log("Error occoured",err);
      res.status(500).json(err);
  
    }
  })
  
// parameterized 
  router.get('/:taste', async (req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste=='sweet'|| taste == 'spicy'|| taste=='sour'){
        
        const itemtaste= await menuItem.find({taste:taste});
        console.log("fetched successfully");
        res.status(200).json(itemtaste);
        }else{
            res.status(500).json("Invalid taste");
        }
    }
    catch(err){
        console.log("Error occoured",err);
        res.status(500).json(err);
      
    }
  }) 

  
  // GET MENU FROM DB 
  router.get('/', async (req,res)=>{
    try{
     const data = await menuItem.find();
     console.log('Menu recieved');
     res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({Error: "Internal Server Error"})
    }
  });

  module.exports= router;
  
  