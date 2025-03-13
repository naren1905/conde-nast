const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});
register.registerMetric(httpRequestCounter);

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.labels(req.method, req.path, res.statusCode).inc();
  });
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Metrics available at http://localhost:${PORT}/metrics`);
  });
}

module.exports = app;
