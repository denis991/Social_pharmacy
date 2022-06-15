const express = require('express');
const { List } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newBus = await List.create({ title: req.body.title, status: req.body.status });
		console.log(newBus)
    res.json({ newBus });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
})
module.exports = router

