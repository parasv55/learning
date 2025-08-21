const mongoose = require('mongoose');

const urlShortenerSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{
        timestamp: {
            type: Number
        }
    }]
}, { timestamps: true });

const UrlShortener = mongoose.model('UrlShortener', urlShortenerSchema);

module.exports = UrlShortener;