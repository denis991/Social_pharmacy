
const express = require('express')
const {List} = require('../db/models')

const router = express.Router();

router.delete('/:id', async (req, res) => {
  try {
    const result = await List.destroy({
      where:
        { id: req.params.id },
    });
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
})

module.exports = router
