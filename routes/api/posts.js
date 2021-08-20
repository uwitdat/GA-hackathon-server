const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/post');

// GET all posts
router.get('/', postCtrl.index)

// POST new post
router.post('/', postCtrl.create)

module.exports = router;