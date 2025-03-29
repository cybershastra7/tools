const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

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
    if (!html) return;

    const baseURL = new URL(url).origin;
    const { endpoints: siteEndpoints, jsFiles } = await extractEndpointsFromHTML(html, baseURL);

    console.log("Extracting endpoints from JavaScript files...");
    const jsEndpoints = new Set();
    for (const jsFile of jsFiles) {
        const extracted = await extractEndpointsFromJS(jsFile);
        extracted.forEach((endpoint) => jsEndpoints.add(endpoint));
    }

    console.log("Final Results:");
    console.log("Site Endpoints:", Array.from(siteEndpoints));
    console.log("JS Endpoints:", Array.from(jsEndpoints));

    // Save results to a file
    fs.writeFileSync("endpoints.json", JSON.stringify({
        siteEndpoints: Array.from(siteEndpoints),
        jsEndpoints: Array.from(jsEndpoints),
    }, null, 2));

    console.log("Results saved to endpoints.json");
}

// Usage example
const websiteURL = "https://example.com"; // Replace with the target website
crawlWebsite(websiteURL);
