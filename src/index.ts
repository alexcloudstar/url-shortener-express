import express from 'express';

const app = express();
app.use(express.json());

type TURL = {
    [key: string]: string;
}

const urls: TURL = {};


app.post('/api/shorten', (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const key = Math.random().toString(36).substring(2, 8);
    urls[key] = url;

    return res.status(201).json({ shortUrl: `http://localhost:3000/api/${key}` });
});

app.get('/api/:key', (req, res) => {
    const { key } = req.params;

    const url = urls[key];

    if (!url) {
        return res.status(404).json({ error: 'URL not found' });
    };

    return res.redirect(url);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
