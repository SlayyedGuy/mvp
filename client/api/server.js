// Local API server for dashboard

const express = require('express');
const app = express();
const port = 5000;

app.get('/api/stats', (req, res) => {
    res.json({
        storageUsed: 12.5, // dummy value
        tokensEarned: 150,  // dummy value
        uptimeHours: 48,    // dummy value
        peersConnected: 5,  // dummy value
    });
});

function startAPIServer() {
    app.listen(port, () => {
        console.log(`API server running at http://localhost:${port}`);
    });
}

module.exports = { startAPIServer };
