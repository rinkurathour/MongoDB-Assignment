const express = require('express')
const router = express.Router()
const User = require('../Models/Users')
const students = require('../students.json')
const fs = require('fs')

//Route -1: Create a user : Using Post 'api/user/createUser' No login require
router.post('/createUser', async(req,res)=>{
   
     try {
    const  user = await User.create({
        studentFirstName: req.body.studentFirstName,
        collageName: req.body.collageName,
        location:req.body.location
      })

     students.push(user);
      fs.writeFile("../students.json", JSON.stringify(students), err => {
	
        // Checking for errors
        if (err) throw err;
      
        console.log("Done writing"); // Success
      });
      res.send({user})
    } catch (error) {
      console.error(error.massage)
      res.status(500).send("Some error accured")
    }
    
})



// Route -1:Logged in user detail using Post 'api/user/getuser',Not  login require
router.get('/getuser',async(req,res)=>{
  try {
    
    const user = await User.find()
    res.send(user)
  } catch (error) {
    console.error(error.massage)
    res.status(500).send("Internal error accured")
  }
});
module.exports = router
