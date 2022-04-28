const express = require('express');

const PORT = 3000;
const app = express();

app.use('/', (req, res) => {
    res.send('Hello Soamee!');
  });

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});