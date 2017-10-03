const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next ){
    res.json({text:'musicAPI'});
});

module.exports = router;

