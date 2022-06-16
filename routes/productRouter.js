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
  })
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({
        where: {
          id,
        },
      });
      const { name } = product.dataValues;
      res.render('editProduct', { name });
    } catch (error) {
      res.json({ error });
    }
  });
// router
// .route('/product/:id')
//   .put(async (req, res, next) => {
//     try {
//       const name = await Product.findOne({ where: { name: req.params.name } });
//       const describe = await Product.findOne({
//         where: { describe: req.params.describe },
//       });
//       const price = await Product.findOne({ where: { price: req.params.price } });
//       const discount = await Product.findOne({
//         where: { discount: req.params.discount },
//       });
//       const img = await Product.findOne({ where: { img: req.params.img } });
//       res.json({ name, describe, price, discount, img });
//     } catch (error) {
//       res.json({ error });
//     }
//   });
module.exports = router;
