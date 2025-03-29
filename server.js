const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const path = require("path");

// Regular expression to match API endpoints in JS files
const endpointRegex = /(https?:\/\/[a-zA-Z0-9._\-\/]+(?:\/[a-zA-Z0-9._\-]*)*)/g;

async function fetchWebsite(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error.message);
        return null;
    }
}

async function extractEndpointsFromHTML(html, baseURL) {
    const $ = cheerio.load(html);
    const endpoints = new Set();

    // Extract href links from <a> tags
    $('a[href]').each((_, element) => {
        let href = $(element).attr('href');
        if (href.startsWith('/')) {
            href = baseURL + href;
        }
        if (href.startsWith('http')) {
            endpoints.add(href);
        }
    });

    // Extract JS file URLs
    const jsFiles = [];
    $('script[src]').each((_, element) => {
        let src = $(element).attr('src');
        if (src.startsWith('/')) {
            src = baseURL + src;
        }
        if (src.startsWith('http')) {
            jsFiles.push(src);
        }
    });

    return { endpoints, jsFiles };
}

async function extractEndpointsFromJS(jsURL) {
    try {
        const jsContent = await fetchWebsite(jsURL);
        const matches = jsContent.match(endpointRegex);
        return matches ? matches : [];
    } catch (error) {
        console.error(`Failed to fetch JS file ${jsURL}:`, error.message);
        return [];
    }
}

async function crawlWebsite(url) {
    console.log(`Crawling website: ${url}`);

    const html = await fetchWebsite(url);
    if (!html) return { siteEndpoints: [], jsEndpoints: [] };

    const baseURL = new URL(url).origin;
    const { endpoints: siteEndpoints, jsFiles } = await extractEndpointsFromHTML(html, baseURL);

    console.log("Extracting endpoints from JavaScript files...");
    const jsEndpoints = new Set();
    for (const jsFile of jsFiles) {
        const extracted = await extractEndpointsFromJS(jsFile);
        extracted.forEach((endpoint) => jsEndpoints.add(endpoint));
    }

    return {
        siteEndpoints: Array.from(siteEndpoints),
        jsEndpoints: Array.from(jsEndpoints),
    };
}

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/crawl", async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const results = await crawlWebsite(url);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while crawling the website." });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
