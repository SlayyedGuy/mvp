const fs = require('fs');
const path = require('path');

// Simple encrypted storage (MVP version)
const STORAGE_PATH = path.join(__dirname, '../../storage');

function saveChunk(filename, data) {
    fs.writeFileSync(path.join(STORAGE_PATH, filename), data);
}

function readChunk(filename) {
    return fs.readFileSync(path.join(STORAGE_PATH, filename));
}

module.exports = { saveChunk, readChunk };
