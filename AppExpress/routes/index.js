const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const testJSON = [
    {
        name:'vinh',
        username:'nguyen'
    },
    {
        name:'vi',
        username:'nguyen'
    }

]
router.get('/', function(req, res, next) {
    res.json(testJSON);
});
module.exports = router;
