const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  const visitorName = req.query.visitor_name || 'Guest';
  res.send(`Hello, ${visitorName}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});