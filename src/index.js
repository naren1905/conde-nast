const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Metrics Registry
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Request Counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
});
register.registerMetric(httpRequestCounter);

// Main Route
app.get('/', (req, res) => {
  httpRequestCounter.inc(); // Count requests
  res.send('Hello World');
});

// Metrics Route
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
