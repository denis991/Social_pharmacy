const router = require('express').Router();
const { Product } = require('../db/models');

router
  .route('/product')
  .get(async (req, res) => {
    res.render('product');
  })
  .post(async (req, res) => {
    const { title, describe, price, discount, img } = req.body;
    await Product.create({
      title,
      describe,
      price,
      discount,
      img,
    });
    res.json({ title, describe, price, discount, img });
  });

module.exports = router;
