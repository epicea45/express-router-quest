const express = require('express');
const comments = require('./comments');
const fakeTags = require('../data/tags')

const router = express.Router();

// Get a list of posts
router.get('/', (req, res) => {
  res.json(fakeTags);
});

// Get a single post
router.get('/:tagsId', (req, res) => {
  // Find the post in the array that has the id given by req.params.postId
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const tagsId = Number(req.params.id);
  const foundTags = fakeTags.find((post) => tags.id === tagsId);
  if (!foundTags) {
    return res.status(404).json({
      error: 'Tags not found',
    });
  }
  return res.json(foundTags);
});

router.use('/:tagsId/comments', comments);

module.exports = router;