const fs = require(`fs`);
const path = require(`path`);

const { notes } = require(`../db/db.json`)

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, `../db/db.json`),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

// function removeNote(id, notes) {
//     const noteId = id;
//     const notesList = notes
//     console.log(notesList[0], `here`)
//     for (i = 0; i < notesList.length; i++) {
//         console.log(noteId, notesList[i].id)
//         if (notesList[i].id === noteId) {
//             notes.remove(notesList[i]);
//             return console.log(`-----------`);
//         }
//         // return notesList;
//     }
// }


module.exports = {
    createNewNote,
    // removeNote
}