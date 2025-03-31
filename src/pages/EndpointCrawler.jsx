import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export default function WebsiteCrawler() {
    const [url, setUrl] = useState("");
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const crawlWebsite = async () => {
        if (!url) {
            alert("Please enter a valid URL.");
            return;
        }

        setLoading(true);
        setError(null);
        setResults(null);

        try {
            const response = await fetch(`/src/crawl?url=${encodeURIComponent(url)}`);
            if (!response.ok) {
                throw new Error("Failed to crawl the website.");
            }
            const data = await response.json();
            <script>
                resultsDiv.innerHTML = `
                    <h2>Results</h2>
                    <h3>Site Endpoints:</h3>
                    <ul>${data.siteEndpoints.map(endpoint => `<li>${endpoint}</li>`).join('')}</ul>
                    <h3>JavaScript Endpoints:</h3>
                    <ul>${data.jsEndpoints.map(endpoint => `<li>${endpoint}</li>`).join('')}</ul>
                `;
            </script>
            setResults(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const openRawData = () => {
        if (!results) return;
        
        const rawData = JSON.stringify(results, null, 2);
        const blob = new Blob([rawData], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    };

    return (
        <div className="min-h-screen bg-black">
            <div className="pt-32 container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
                    <div className="flex items-center mb-8">
                        <CodeBracketIcon className="h-12 w-12 text-[#2196F3] mr-4" />
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">Website Crawler</h1>
                    </div>

                    <div className="bg-gradient-to-br from-[#1976D2]/30 to-[#2196F3]/30 p-8 rounded-2xl backdrop-blur-lg mb-8">
                        <p className="text-gray-300 mb-6">Enter a website URL to extract endpoints and analyze JavaScript files:</p>

                        <div className="flex gap-4 mb-4">
                            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" className="flex-1 bg-black/30 border border-[#2196F3]/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#2196F3]" />
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={crawlWebsite} disabled={loading} className="bg-[#2196F3] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#1976D2] transition-colors disabled:opacity-50">{loading ? 'Crawling...' : 'Crawl'}</motion.button>
                        </div>
                        {error && <div className="text-red-500 mb-4">Error: {error}</div>}
                    </div>

                    {results && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 p-8 rounded-2xl backdrop-blur-lg mb-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Results</h2>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openRawData} className="bg-[#2196F3]/20 text-[#2196F3] px-4 py-2 rounded-lg font-semibold hover:bg-[#2196F3]/30 transition-colors">View Raw Data</motion.button>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Site Endpoints</h3>
                                    <ul className="space-y-2">{results.siteEndpoints.map((endpoint, index) => (<li key={index} className="text-gray-300 bg-black/30 p-2 rounded">{endpoint}</li>))}</ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4">JavaScript Endpoints</h3>
                                    <ul className="space-y-2">{results.jsEndpoints.map((endpoint, index) => (<li key={index} className="text-gray-300 bg-black/30 p-2 rounded">{endpoint}</li>))}</ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
