var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/img', (req, res, next) => {
  const img = req.app.locals.img.pop();
  res.json({img: img ? img : ''});
});

module.exports = router;
