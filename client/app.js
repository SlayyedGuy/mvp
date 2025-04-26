// Entry point: starts P2P, API server, Uptime tracking

const { startP2PNode } = require('./core/p2p_manager');
const { startAPIServer } = require('./api/server');
const { trackUptime } = require('./core/uptime_tracker');

async function startApp() {
    console.log('Starting decentralized storage node...');
    await startP2PNode();
    startAPIServer();
    trackUptime();
}

startApp();
