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

// The D in CRUD
// Generally use status 204 for delete, in this case I'm using 200 to return a message.
router.delete('/:id', (req, res) => {
    const actionId = req.params.id;

    actiondb
    .remove(actionId)
    .then(deleted => {
            res.status(200).json({ success: true, message: 'you deleted!'});
    })
    .catch(({ code, message }) => {
        res.status(code).json({ success: false, message: "The actions could not be removed" });
    });
});







module.exports = router;