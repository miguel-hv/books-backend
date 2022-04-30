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
const authorRoutes = require('./routes/author.routes');
const booksRoutes = require('./routes/books.routes');
// const bookRoutes = require('./routes/book.routes');

const { urlencoded } = require('express');


app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use('/authors', authorsRoutes);
app.use('/author', authorRoutes);
app.use('/books', booksRoutes);
// app.use('/book', bookRoutes);

app.use('/', router);

app.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log('Error handler ', err);
  res.status(err.status || 500).json(err.message || "Unexpected error")
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});