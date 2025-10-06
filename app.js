const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from SonarQube & Trivy challenge!' });
});

module.exports = app;
