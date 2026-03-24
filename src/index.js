const express = require('express');
const app = express();
const { version } = require('../package.json');
const PORT = 3001;

app.get('/', (req, res) => {
  res.json({
    service: 'server1',
    status: 'running',
    version: version,
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`server1 service running on port ${PORT} — v${version}`);
});
