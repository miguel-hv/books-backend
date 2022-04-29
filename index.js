const express = require('express');
const Author = require('./models/Author.model');
const db = require('./db.js');

const PORT = 3000;
db.connect();
const app = express();
const { urlencoded } = require('express');

const router = express.Router();

app.use(express.json());
app.use(urlencoded({ extended: false }));

router.get('/', (req, res)=>{
    res.send('¡Hello Soamee!');
});

router.get('/test', (req, res)=>{
  res.send('Test page');
});

router.get('/authors', async (req, res) => {
	try {
		const authors = await Author.find();
    console.log(authors);
		return res.status(200).json(authors);
		// return res.send('authors page');
	} catch (err) {
    console.log(err);
		return res.status(400).json(err);
	}
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});