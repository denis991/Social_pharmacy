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
      res.render('editProduct', { name, id });
    } catch (error) {
      res.json({ error });
    }
  })
  .put(async (req, res, next) => {
    try {
      console.log("123", req.params);
      console.log("body", req.body);
      let { name, describe, price, discount, img } = req.body;
      price = +price;
      discount = +discount;
      try {
        console.log(name, describe, price, discount, img);
        if (name && describe && price && discount && img) {
          const prodEdit = await Product.update({
            name,
            describe,
            price,
            discount,
            img,
          }, {
            where: {
              id: req.params.id,
            },
          });
          res.json(prodEdit);
        }
      } catch (error) {
        console.log(error);
        res.json({ error });
      }
      res.json({ name, describe, price, discount, img });
    } catch (error) {
      res.json({ error });
    }
  });
module.exports = router;
