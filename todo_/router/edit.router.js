const express = require('express');
const { List } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const findBus = await List.findOne({ where: { id: req.params.id } });
  res.json({ findBus });
});

router.post('/:id', async (req, res) => {
  const findBus = await List.findOne({ where: { id: req.params.id } });
  findBus.title = req.body.title;
  await findBus.save();
  res.json({ findBus });
});

module.exports = router;
