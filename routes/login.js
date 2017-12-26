const express = require ('express');
const router = express.Router();
const User=require('../models/user');
router.post('/userlogin', function(req, res,next){
   User.findOne({
    name:req.body.name,
    password:req.body.password
  }).then(function(user){
      if(user){
          res.send({"status":200,"message":"success"

          });
      }
    else if(!user){
        res.status(401).send('user not found');
    }
  })
});

 
module.exports = router;
