const router = require('express').Router();
const db = require('../../../db/db.json');
const {validateNote, createNewNote} = require('../../../lib/notes');

router.get('/notes', (req, res) => {
  let results = db;  
  if (results) {
    res.json(results);
  } else {
    res.send(404);
  }
});


router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, db);
        res.json(note);
    }
});



module.exports = router;