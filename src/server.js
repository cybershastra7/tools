const express = require("express");
const path = require("path");
const crawlWebsite = require("./crawler"); // Import crawler logic

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// API route for crawling websites
app.get("/crawl", async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const results = await crawlWebsite(url);
        res.json(results);
    } catch (error) {
        console.error("Crawling error:", error.message);
        res.status(500).json({ error: "An error occurred while crawling the website." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
