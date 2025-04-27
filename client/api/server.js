const express = require('express')
const multer = require('multer')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 5001

app.use(cors())
app.use(express.json())

const upload = multer({ dest: 'uploads/' })

// In-memory node stats
let nodeStats = {
  peers: 4,
  uptime: 10,
}

// Upload Endpoint
app.post('/api/upload', upload.array('files'), (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files uploaded')
  }
  console.log('Files received:', req.files.length)
  res.send('Files uploaded successfully')
})

// Stats Endpoint
app.get('/api/stats', (req, res) => {
  res.json(nodeStats)
})

// Start Server
app.listen(PORT, () => {
  console.log(`Node server running at http://localhost:${PORT}`)
})
