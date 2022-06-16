const router = require('express').Router();
const { Product } = require('../db/models');

router
  .route('/product')
  .get(async (req, res) => {
    const product = await Product.findAll();
    res.render('product', { product });
  })
  .post(async (req, res) => {
    const { name, describe, price, discount, img } = req.body;
    try {
      if (name && describe && price && discount && img) {
        const prod = await Product.create({
          name,
          describe,
          price,
          discount,
          img,
        });
        res.json(prod);
      }
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  });
router
  .route('/product/:id')
  .delete(async (req, res, next) => {
    console.log(req.params.id);
    try {
      const delProd = await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ delProd });
    } catch (error) {
      res.json({ error });
    }
  });
module.exports = router;
