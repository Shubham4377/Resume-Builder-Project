const router = require('express').Router();
const Resume = require('../models/Resume');

// POST - Create a new resume
router.route('/').post((req, res) => {
  const newResume = new Resume(req.body);
  newResume.save()
    .then(() => res.json('Resume added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
