const express = require ('express');
const person = require('./../models/person')
const router = express.Router();


//POST METHOD
router.post('/', async (req, res) => {  
  try{
   // assuming req.bosy contain person data 
   const data = req.body
  
   // createnew person  document using mongoose model 
   const newPerson = new person(data);
  
   // saving person info 
   const savedPerson =await newPerson.save();
      console.log('data saved',savedPerson);
      res.status(200).json(savedPerson);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error '});
  }
  })


  // GET METHOD
  router.get('/', async(req,res)=>{
    try{
       const data = await person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error '});
    }
  })

  //  Parameterized GET METHOD
  router.get('/:workType',async(req,res)=>{
    try{
      // extract work type from url parameter
    const workType = req.params.workType;
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response = await person.find({work:workType});
        console.log("Response Fetched ");
        res.status(200).json(response);
  
    }else{
      res.status(400).json({error:'Invalid WorkType !!'})
  
    }
  
  }catch(err){
    console.log(err);
    res.status(500).json({Error: "Internal Server Error"})
  }
  
  })



  // UPDATE data 

  router.put('/:id',async(req,res)=>{
    try{
        const personid = req.params.id;// extract id from url parameter
        const updatedpersondata = req.body; // updated data for person 

        const response = await person.findByIdAndUpdate(personid,updatedpersondata ,{
          new : true,   // return updated document
          runValidators:true,  // run mongoose validation
        })

        if(!Response){
          res.status(404).json({Error: "person not found"})
        }

      
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
      console.log(err);
      res.status(500).json({Error: "Internal Server Error"})
    }
  })
  

  // DELETE method

  router.delete('/:id',async(req,res)=>{
    try{
    const personid= req.params.id;
    const response = await person.findByIdAndDelete(personid);
    if(response){
      res.status(400).json({Error: "person not found"})
    }
    console.log('data deleted');
    res.status(200).json("deleted ")
    }
    catch(err){
      console.log(err);
      res.status(500).json({Error: "Internal Server Error"})
    }
  })


// addeing for git push update purpose
  module.exports= router;
  
  