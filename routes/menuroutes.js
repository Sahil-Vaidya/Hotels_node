const express = require('express');
const router = express.Router();
const menu = require('./../models/menu');

//POST ROUTE TO ADD A MENU
router.post('/', async (req,res)=>{
    try{
      const data = req.body;
  //create a menu document using the mongoose model
      const menucard = new menu(data);
  //save the menu to the database
      const list = await menucard.save();
      console.log('data saved');
      res.status(200).json(list);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
  })

  
// GET METHOD TO GET THE MENU 
router.get('/', async (req,res)=>{
    try{
      const data = await menu.find();
      console.log('got it');
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
});

router.get('/:tastetype', async (req,res)=>{
    try{
        const tastetype = req.params.worktype;
        if(tastetype == 'sweet' || tastetype == 'spicy' || tastetype == 'sour'){
            const response = await menu.find({taste:tastetype});
            console.log('response loaded');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

router.put('/:id', async (req,res) =>{
  try{
    const menuid = req.params.id;
    const updatemenuid = req.body;

    const response = await menu.findByIdAndUpdate(menuid,updatemenuid,{
      new:true,
      runValidators:true
    })

    if(!response){
      return res.status(404).json({error: 'menu not found'}); 
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
    const menuid = req.params.id;

    //assuming you have a person model
    const response = await person.findByIdAndDelete(menuid);

    if(!response){
      return res.status(404).json({error: 'menu not found'}); 
  }
  console.log('data delete');
  res.status(200).json({message: ' menu delete successfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
});

module.exports = router;
