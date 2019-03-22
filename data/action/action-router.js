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