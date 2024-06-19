const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post('/',async (req,res) =>{
    try{
        const data = req.body // Assuming the request body contain the person data
        
      //create a new person document using the mongoose model
      const newPerson = new person(data);
    
      //save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    
      }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
      }
});

//get method to get the person
router.get('/', async (req,res)=>{
    try{
      const data =await person.find();
      console.log('data fetched');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
  });

router.get('/:worktype',async(req,res)=>{
    try{
      const worktype = req.params.worktype;
      if(worktype == 'chef' || worktype == 'manager'|| worktype == 'waiter'){//validation
        const response = await person.find({work: worktype});
        console.log('response loaded');
        res.status(200).json(response);
      } 
      else{
        res.status(404).json({error: 'Invalid work type'});
      }
    
    }catch(err){
    console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
   
  });

router.put('/:id', async (req,res) =>{
    try{
        const personid = req.params.id;// extract the id from the url parameter
        const updatepersondata = req.body; //update data for person

        const response = await person.findByIdAndUpdate(personid,updatepersondata, {
            new :true,
            runValidators: true
        })

        if(!response){
            return res.status(404).json({error: 'person not found'}); 
        }

        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.delete('/:id', async (req,res) =>{
    try{
        const personid = req.params.id;

        //assuming you have a person model
        const response = await person.findByIdAndDelete(personid);

        if(!response){
            return res.status(404).json({error: 'person not found'}); 
        }
        console.log('data delete');
        res.status(200).json({message: ' person delete successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports = router;

