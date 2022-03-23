var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();
var reviewscollection= require("./users");

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/write', function(req, res, next) {
  res.render('write');
});

/* GET home page. */



router.get('/reviews', function(req, res, next) {
  reviewscollection.find()
  .then((data)=>{
    res.render('read',{data});
  })
  
});

router.post('/submit',(req,res)=>{
  reviewscollection.create({
    name:req.body.name,
    review:req.body.review
  })
  .then(()=>{
    res.redirect('/reviews');
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.get('/update/:id',function(req,res){
  reviewscollection.findOne({
    _id:req.params.id
  })
  .then(function(details){
    res.render('update',{
      details
    })
  })
})

router.post('/update/:id',function(req,res){
  let update={
    name:req.body.name,
    review:req.body.review
  }
  reviewscollection.findOneAndUpdate(
  {
    _id:req.params.id
  },
  {
    '$set':update
  },
  {
    require:true
  }
  )
  .then(function(update){
    res.redirect('/reviews');
  })
})

router.get('/delete/:id',function(req,res){
  reviewscollection.findOneAndDelete({_id:req.params.id})
  .then(function(){
    res.redirect('/reviews');
  })
})

module.exports = router;
