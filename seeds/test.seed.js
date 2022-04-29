//TODO: delete file

const mongoose = require('mongoose');
 
const { DB_URL, DB_CONFIG } = require('../db');

const Schema = mongoose.Schema;

const initSchema = new Schema (
    {
        name : { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const Init = mongoose.model('Init', initSchema);

const initArray = [
    {
        name : 'test',
    },
];

// instance 
const initDocuments = initArray.map(e => new Init(e));

mongoose.connect(DB_URL, DB_CONFIG) 
.then(async () => {
    console.log('Executing init seed');

    const anyCollection = await Init.find();

    if(anyCollection.length) {
        await Init.collection.drop();
        console.log('Init collection dropped');  
    }
})
.catch(error => {
    console.log('Error searching db: ', error);
})
.then(async () => {
    await Init.insertMany(initDocuments);
    console.log('seed executed');
})
.catch(error => {
    console.log('Error inserting artists: ', error);
})
.finally( ()=> {    
    mongoose.disconnect();
}); 