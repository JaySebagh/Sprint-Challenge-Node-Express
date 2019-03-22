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

router.get('/:id', (req, res) => {
    const projectId = req.params.id;
    projectdb.getProjectActions(projectId)
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: "The project with the specified ID does not exist." });
            }
        })
        .catch(err => {
            res.status(500).json({ error: "The project information could not be retrieved." });
        });
})

module.exports = router;