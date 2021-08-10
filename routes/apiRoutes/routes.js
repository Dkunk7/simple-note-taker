// import { v4 as uuidv4 } from 'uuid';   <-- This is ES6 syntax for the below line
const { v4: uuidv4 } = require(`uuid`);

const router = require(`express`).Router();

const {
    createNewNote,
} = require(`../../lib/notes`);
const notes = require(`../../db/db.json`);

router.get(`/notes`, (req, res) => {
    let results = notes;
    // maybe need query handling here?
    res.json(notes);
    console.log(notes);
});

router.post(`/notes`, (req, res) => {
    req.body.id = uuidv4();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;