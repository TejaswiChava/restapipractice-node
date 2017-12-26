const express = require ('express');
const router = express.Router();
const Ninja=require('../models/ninja');

// get a list of ninjas from the db
router.get('/tejas', function(req, res,next){
   Ninja.find({}).then(function(ninjas){
       res.send(ninjas);
   })
});

// add a new ninja to the db
router.post('/tejas', function(req, res,next){
    // var schema_model1 = new Schema_model1(req.body); this is the old method to create an instance and save the data to it
    // schema_model1.save();
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);

    }).catch(next);//this automatically creates instance in database and save
  
});

// update a ninja in the db
router.put('/tejas/:id', function(req, res ,next){
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        res.send("updated successfully");
    });
});

// delete a ninja from the db
router.delete('/tejas/:id', function(req, res,next){
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send("record deleted successfully....");
    });
  
});

module.exports = router;