const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { user: 'DevOpsCon user' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

module.exports = app;