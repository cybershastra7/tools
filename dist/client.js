async function crawlWebsite() {
    const url = document.getElementById('url').value;
    if (!url) {
        alert('Please enter a valid URL.');
        return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p class="loading">Crawling the website...</p>';

    try {
        const response = await fetch(`/crawl?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
            throw new Error('Failed to crawl the website.');
        }

        const data = await response.json();
        resultsDiv.innerHTML = `
            <h2>Results</h2>
            <h3>Site Endpoints:</h3>
            <ul>${data.siteEndpoints.map(endpoint => `<li>${endpoint}</li>`).join('')}</ul>
            <h3>JavaScript Endpoints:</h3>
            <ul>${data.jsEndpoints.map(endpoint => `<li>${endpoint}</li>`).join('')}</ul>
        `;
    } catch (error) {
        resultsDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
