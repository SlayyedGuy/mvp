const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Dummy data
let balance = 125;
let peers = [
  { id: 'peer1', ip: '192.168.1.5', status: 'Connected' },
  { id: 'peer2', ip: '192.168.1.8', status: 'Disconnected' },
];
let transfers = [
  { file: 'movie.mp4', status: 'Uploading', progress: '75%' },
  { file: 'doc.pdf', status: 'Downloading', progress: '40%' },
];
let online = true;

app.use(cors());

app.get('/api/balance', (req, res) => {
  res.json({ balance });
});

app.get('/api/peers', (req, res) => {
  res.json({ peers });
});

app.get('/api/transfers', (req, res) => {
  res.json({ transfers });
});

app.get('/api/status', (req, res) => {
  res.json({ online });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
