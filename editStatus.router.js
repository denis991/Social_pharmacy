const express = require('express')
const { List } = require('./db/models')

const router = express.Router();

router.get('/:id', async (req, res) => {
  const findBus = await List.findOne({ where: { id: req.params.id } });
  if (findBus.status === 'В наличии' || findBus.status === 'В наличии') findBus.status = 'Нет в наличии';
	else findBus.status = 'В наличии';
	await findBus.save();
	res.json({ findBus })
})
module.exports = router;
