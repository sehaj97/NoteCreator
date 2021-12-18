
const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  
  var notesArray = JSON.parse(data)
  
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return note;
  }

  

function removeNote(id) {
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  console.log(data);
  var notesArray = JSON.parse(data).filter(note => note.id !== id);
  console.log(notesArray)
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    
    JSON.stringify(notesArray)
  );
  return notesArray;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    return true;
  }

  module.exports = {
    createNewNote,
    validateNote,
    removeNote
  };