const express = require('express');

const projectdb = require('../helpers/projectModel')

const router = express.Router();

// The R in CRUD
router.get('/', (req, res) => {
    projectdb
    .get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ success: false, message: "The project info could not be retrieved." })
    })
})

module.exports = router;