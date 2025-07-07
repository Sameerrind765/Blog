import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/anime", async (req, res) => {
  const query = req.query.q || "Naruto";
  try {
    const response = await axios.get(
      `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=${encodeURIComponent(query)}`
    );
    res.send(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

export default router;