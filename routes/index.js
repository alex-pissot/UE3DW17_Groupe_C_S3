var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UE 3DW16 - Groupe C' });
});

/* GET All title  */
router.get('/alltitles', function(req, res) {
  var db = req.db;
  var collection = db.get('documents');
  collection.find({},{},function(e,docs){
    res.render('alltitles', {
      "documents" : docs
    });
  });
});

/* GET Docs rank 1 to 10. */
router.get('/titlerank', function(req, res) {
  var db = req.db;
  var collection = db.get('documents');
  collection.find({},{},function(e,docs){
    res.render('titlerank', {
      "documents" : docs
    });
  });
});

/* GET titles start with N*/
router.get('/auteur',function(req,res){
  var db = req.db;
  var collection = db.get('documents');
  collection.find({},{},function(e,docs){
    res.render('auteurs', {
      "auteurs":docs
  
    });
  });
 
});

/* GET Docs type. */
router.get('/alldocumentstype', function(req, res) {
    var db = req.db;
    var collection = db.get('documents');
    collection.find({},{},function(e,docs){
      res.render('alldocumentstype', {
        "documents" : docs
      });
    });
});

/* GET Docs without type. */
router.get('/notype', function(req, res) {
    var db = req.db;
    var collection = db.get('documents');
    collection.find({},{},function(e,docs){
      res.render('notype', {
        "documents" : docs
      });
    });
});

module.exports = router;
