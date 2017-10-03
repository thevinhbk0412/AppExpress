var express = require('express');
var router = express.Router();
const User = require('../../models/user');
/* GET users listing.
* http://localhost:3000/api/users/list*/
router.get('/list', function(req, res, next) {
  User.find(function (err,users){
      if(err){
          res.send(err);
      }
      res.json(users);
  });
});

module.exports = router;

