const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/soamee_books';

const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// connect MongoDB through mongoose
//TODO: delete console log
const connect = ()=> {    
    console.log('tryna connect');
    mongoose.connect(DB_URL, DB_CONFIG)
    .then(res => {
        const { name, host } = res.connection;
        console.log(`Successfully connected to ${name} in ${host}`);
    })
    .catch(error => {
        // console.error(error);
        console.log('Error connecting to db: ', error);
    });
}

module.exports = {DB_URL, DB_CONFIG, connect}; 
