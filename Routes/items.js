// this is the items.js file

import express from "express";
const router = express.Router();

// The in-memory record storage array
let mockDatabase = [];

// Reads all the reosource records.
router.get("/", (req, res) => {

    res.status(200).json({ data: mockDatabase});

})

// Dynamic GET route: extracts the route parameters via the req.params
router.get("/:id", (req, res) => {

    const targetID = req.params.id;
    const match = mockDatabase.find(item => item.id === targetID);

    if (!match){
        return res.status(404).json({ error: `Resource item with ID: ${targetID} does not exist.`});
    }
    res.status(200).json({ data: match });
});

// Post route with validation handshakes
router.post("/", (req,res) => {

    const {title} = req.body;
   if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Validation Fault: Object attribute 'title' is missing or blank." });
   }

   const newItem = {id: Date.now().toString(), title: title.trim()};
   mockDatabase.push(newItem);
   res.status(201).json({ data: newItem });
});


// overwrite field properties for matching target IDs.
router.put("/:id", (req, res) => {
    const targetID = req.params.id;
    const index = mockDatabase.findIndex(item => item.id === targetID);

if (index === -1) {
        return res.status(404).json({ error: `Resource item with ID: ${targetID} does not exist.` });
    }

    const { title } = req.body;
    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Validation Fault: Object attribute 'title' is missing or blank." });
    }

    mockDatabase[index] = { id: targetID, title: title.trim() };
    res.status(200).json({ data: mockDatabase[index] });
});

// Target and splice out the matching object form the tracking matrix.

router.delete("/:id", (req, res) => {
    const targetID = req.params.id;
    const index = mockDatabase.findIndex(item => item.id === targetID);

    if (index === -1) {
        return res.status(404).json({ error: `Resource item with ID: ${targetID} does not exist.` });
    }

    const deletedItem = mockDatabase.splice(index, 1);
    res.status(200).json({ message: "Successfully deleted resource", data: deletedItem[0] });
});


export default router;