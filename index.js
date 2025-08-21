const express = require('express');
const { connectToMongoDB } = require('./db-connection');
const urlShortenerRoutes = require('./routes/url-shortner');
const URL = require('./models/url-shortner');

const app = express();
const PORT = 8000;

connectToMongoDB('mongodb://localhost:27017/url-shortener');
app.use(express.json());

app.use('/generate-url', urlShortenerRoutes);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId },
      { 
        $push: { visitHistory: { timestamp: Date.now() } }
      }
    );
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});