const express = require('express');

require('./db.js');

const PORT = 3000;
const app = express();

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('¡Hello Soamee!');
});

router.get('/test', (req,res)=>{
    res.send('This is a test page');
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});