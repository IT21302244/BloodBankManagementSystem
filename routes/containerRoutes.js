const express = require('express');
const router = express.Router();
const containerController = require('../controllers/containerController');

// CREATE a new container
router.post('/Containers', containerController.create);

// GET all container
router.get('/Containers', containerController.findAll);

// GET a specific container by ID
router.get('/Containers/:id', containerController.findOne);

// UPDATE an existing container
router.put('/Containers/:id', containerController.update);

// DELETE an existing container
router.delete('/Containers/:id', containerController.delete);

module.exports = router;
