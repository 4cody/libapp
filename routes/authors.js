const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// Require controller modules.
const author_controller = require('../controllers/authorController');

// @Route POST
// @Desc Add new author
// PUBLIC
router.post('/add', author_controller.author_add);

// @Route GET
// @Desc Get all authors 
// PUBLIC
router.get('/', author_controller.author_list);

// @Route GET
// @Desc Get one author by name
// PUBLIC
router.get('/:name', author_controller.author_name);

module.exports = router;