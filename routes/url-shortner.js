const express = require('express');
const { generateShortUrl } = require('../controllers/url-shortner');

const router = express.Router();

router.post('/', generateShortUrl)


module.exports = router;