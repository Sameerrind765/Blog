import express from 'express';
import axios from 'axios';

const router = express.Router();
const API_KEY = 'pub_c3b44ca4b4214f758d1a34b309cb72a2';

router.get('/news', async (req, res) => {
    try {
        const query = req.query.q || 'technology';

        const response = await axios.get('https://newsdata.io/api/1/latest', {
            params: {
                apikey: API_KEY,
                q: query,
                language: 'en',
                country: 'pk'
            }
        });

        res.json(response.data.results); // only return articles array
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

export default router;
