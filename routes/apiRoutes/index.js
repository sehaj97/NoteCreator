const router = require('express').Router();
const notesRoutes = require('./notesRoutes/notes.js');

router.use(notesRoutes);

module.exports = router;