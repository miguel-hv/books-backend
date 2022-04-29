const express = require('express');
const Author = require('./models/Author.model');
const db = require('./db.js');

const PORT = 3000;
db.connect();
const app = express();

const router = express.Router();
const authorsRoutes = require('./routes/authors.routes');

const { urlencoded } = require('express');


app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/authors', authorsRoutes);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});