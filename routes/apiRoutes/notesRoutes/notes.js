const router = require('express').Router();
var uniqid = require('uniqid');
const path = require('path');
const fs = require('fs');
const {validateNote, createNewNote, removeNote} = require('../../../lib/notes');

router.get('/notes', (req, res) => {
  let results = fs.readFileSync(path.join(__dirname, '../../../db/db.json'));  
  results = JSON.parse(results)
  if (results) {
    res.json(results);
  } else {
    res.send(404);
  }
});


router.post('/notes', (req, res) => {
  req.body.id = uniqid();
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body);
        res.json(note);
    }
});


router.delete('/notes/:id', (req, res) => {
  if (req.params.id) {
    removeNote(req.params.id);
    res.send('deleted!');
  } else {
    res.send(404);
  }
});

module.exports = router;