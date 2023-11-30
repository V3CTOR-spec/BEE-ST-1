const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Blog API');
});

module.exports = router;
