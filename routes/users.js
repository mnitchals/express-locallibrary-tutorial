var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('you are cool');
});
//mongodb+srv://odin:project@expresscluster.e73m3.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb+srv://odin:project@cluster0.e73m3.mongodb.net/local_library?retryWrites=true&w=majority
module.exports = router;
