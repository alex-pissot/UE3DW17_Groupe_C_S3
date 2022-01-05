var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UE 3DW16 - Groupe C' });
});

// /* GET All titles. */
// router.get('/all-titles', function(req, res, next) {
//   res.render('all-titles', { title: 'UE 3DW16 - Groupe C' });
// });


/* GET All title  */
router.get('/alltitles', function(req, res) {
  var db = req.db;
  var collection = db.get('documents');
  collection.find({},{},function(e,docs){
    res.render('alltitles', {
      "alltitles" : docs
    });
  });
});

module.exports = router;
