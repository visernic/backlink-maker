document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url-input');
    const generateBtn = document.getElementById('generate-btn');
    const resultsLog = document.getElementById('results-log');
    const statusMessage = document.getElementById('status-message');

    // 20 Demo Site Added
    const dummySites = [
        { name: "Global Web Directory", authority: "92", status: "success" },
        { name: "Tech Innovators Hub", authority: "88", status: "success" },
        { name: "Digital Marketing Insights", authority: "90", status: "success" },
        { name: "Software Development Forum", authority: "85", status: "failed" }, // Simulated fail
        { name: "Startup Ecosystem Guide", authority: "81", status: "success" },
        { name: "Webmasters Resource Library", authority: "78", status: "success" },
        { name: "Online Business Journal", authority: "87", status: "success" },
        { name: "Marketing Strategy Blog", authority: "83", status: "success" },
        { name: "SEO Expert Community", authority: "91", status: "success" },
        { name: "Developer's Daily Digest", authority: "75", status: "failed" }, // Simulated fail
        { name: "AI & Future Tech Portal", authority: "89", status: "success" },
        { name: "Cloud Computing Central", authority: "86", status: "success" },
        { name: "Free Website Analyzer", authority: "79", status: "success" },
        { name: "Analytics Tracker Pro", authority: "84", status: "success" },
        { name: "Info Database Listings", authority: "77", status: "failed" }, // Simulated fail
        { name: "Global Site Ranker", authority: "93", status: "success" },
        { name: "Niche Market Finders", authority: "76", status: "success" },
        { name: "Content Creators Collective", authority: "82", status: "success" },
        { name: "E-commerce Leaders Network", authority: "88", status: "success" },
        { name: "Top Ranking Sites Archive", authority: "90", status: "success" }
    ];

    generateBtn.addEventListener('click', async () => {
        // --- Validation ---
        const url = urlInput.value.trim();
        if (!url || !isValidUrl(url)) {
            updateLog("Error: Invalid URL. Please include http:// or https://", 'error');
            return;
        }

        // Using a try...finally block to ensure the button is always re-enabled
        try {
            // --- Step 1: Disable button and reset UI ---
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            statusMessage.className = 'status-message status-processing';
            resultsLog.innerHTML = `[${getTime()}] Initiating backlink simulation for: <span style="color:#50E3C2;">${url}</span>\n\n`;
            
            let successCount = 0;
            let failureCount = 0;

            // --- Step 2: Loop through all 20 sites ---
            for (let i = 0; i < dummySites.length; i++) {
                const site = dummySites[i];
                statusMessage.innerText = `Processing ${i + 1}/${dummySites.length}`;

                // Log "Submitting..." message
                updateLog(`[${getTime()}] Submitting to ${site.name} (DA: ${site.authority})...`);
                await delay((Math.random() * 300) + 200); // Short delay

                // Log "SUCCESS" or "FAILED" message
                if (site.status === 'success') {
                    successCount++;
                    updateLog(`&nbsp;&nbsp;↳ <span style="color:#2ECC71;"><i class="fas fa-check-circle"></i> SUCCESS</span>`);
                } else {
                    failureCount++;
                    updateLog(`&nbsp;&nbsp;↳ <span style="color:#E74C3C;"><i class="fas fa-times-circle"></i> FAILED</span>`);
                }
                
                await delay((Math.random() * 200) + 100); // Short delay before next one
            }

            // --- Step 3: Display the final summary ---
            updateLog(`\n[${getTime()}] <span style="color:#50E3C2; font-weight:bold;">Simulation Complete!</span>`);
            updateLog(`<span style="color:#2ECC71;">${successCount} Successful</span>, <span style="color:#E74C3C;">${failureCount} Failed</span>.`);
            
            statusMessage.className = successCount > 0 ? 'status-message status-success' : 'status-message status-error';
            statusMessage.innerText = `Finished! (${successCount} Success)`;

        } finally {
            // --- Step 4: Re-enable the button no matter what happens ---
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-rocket"></i> Generate Backlinks';
        }
    });

    // Helper function to update the log
    function updateLog(message) {
        resultsLog.innerHTML += message + '\n';
        resultsLog.scrollTop = resultsLog.scrollHeight; // Auto-scroll
    }

    // Helper function for creating a delay
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Helper function to get current time
    function getTime() {
        return new Date().toLocaleTimeString();
    }

    // Helper function to validate URL
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (e) {
            return false;
        }
    }
});
