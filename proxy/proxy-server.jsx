const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/fetch-article', async (req, res) => {
    const { url } = req.query;

    try {
        const response = await axios.get(url);

        // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
        let dom = new JSDOM(response.data, {
            url: url
        });

        // now pass the DOM document into readability to parse
        let article = new Readability(dom.window.document).parse();

        res.status(200).json(article.textContent);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching article' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
