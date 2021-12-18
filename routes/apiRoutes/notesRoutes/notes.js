const router = require('express').Router();
const db = require('../../../db/db.json');

router.get('/notes', (req, res) => {
  let results = db;  
  if (results) {
    res.json(results);
  } else {
    res.send(404);
  }
});

module.exports = router;