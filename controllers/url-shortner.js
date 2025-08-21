const shortid = require('shortid');
const UrlShortener = require('../models/url-shortner');

async function generateShortUrl(req, res) {
    (!req.body.url) ? res.status(400).send({error: 'url is required'}) : null;
    const shortId = shortid();
    await UrlShortener.create({
        shortId,
        redirectURL: req.body.url,
        visitHistory: []
    });

    return res.status(201).json({
        id: shortId,
    });
}

module.exports = {
    generateShortUrl,
};