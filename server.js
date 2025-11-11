const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint - returns JSON
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Hello from DevOps Pipeline!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    status: 'running'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Main page - serves HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = { app, server };