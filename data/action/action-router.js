const express = require('express');

const actiondb = require('../helpers/actionModel.js')

const router = express.Router();

// The R in CRUD
router.get('/', (req, res) => {
    actiondb
    .get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ success: false, message: "The action info could not be retrieved." })
    })
})

module.exports = router;

// The C in CRUD
router.post('/', (req, res) => {
    const action = req.body;
    actiondb
    .insert(action)
    .then(action => {
            res.status(201).json({ success: true, action });
    })
    .catch(message => {
        res.status(500).json({ success: false, message: "There was an error while saving the action to the database"  });
    });
});