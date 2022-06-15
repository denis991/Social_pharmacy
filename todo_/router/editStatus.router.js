const express = require('express')
const { List } = require('../db/models')

const router = express.Router();

router.get('/:id', async (req, res) => {
  const findBus = await List.findOne({ where: { id: req.params.id } });
  if (findBus.status === 'Сделано' || findBus.status === 'сделано') findBus.status = 'Не сделано';
	else findBus.status = 'Сделано';
	await findBus.save();
	res.json({ findBus })
})
module.exports = router;
