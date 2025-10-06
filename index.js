const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from SonarQube & Trivy challenge!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
