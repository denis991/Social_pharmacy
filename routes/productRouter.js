const router = require('express').Router();

router.route('/product').get(async (req, res) => {
  res.render('product');
});

module.exports = router;
