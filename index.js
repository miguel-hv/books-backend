const express = require('express');
const Author = require('./models/Author.model');
const db = require('./db.js');
const cors = require('cors');

const PORT = 3001;
db.connect();
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors({
  origin: ['http://localhost:3000'], //todo: add heroku name,
  credentials: true, 
}));

const router = express.Router();
const authorsRoutes = require('./routes/authors.routes');
const booksRoutes = require('./routes/books.routes');

const { urlencoded } = require('express');


app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/authors', authorsRoutes);
app.use('/books', booksRoutes);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});