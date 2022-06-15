const router = require('express').Router();

router.route('/').get(async (req, res) => {
  res.render('index');
});

module.exports = router;
