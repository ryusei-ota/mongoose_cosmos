var mongoose = require('mongoose');
var env = require('dotenv').config();   //Use the .env file to load the variables


const Family = mongoose.model('Family', new mongoose.Schema({
    lastName: String,
    parents: [{
        familyName: String,
        firstName: String,
        gender: String
    }],
    children: [{
        familyName: String,
        firstName: String,
        gender: String,
        grade: Number
    }],
    pets:[{
        givenName: String
    }],
    address: {
        country: String,
        state: String,
        city: String
    }
}));

const family = new Family({
    lastName: "Volum",
    parents: [
        { firstName: "Thomas" },
        { firstName: "Mary Kay" }
    ],
    children: [
        { firstName: "Ryan", gender: "male", grade: 8 },
        { firstName: "Patrick", gender: "male", grade: 7 }
    ],
    pets: [
        { givenName: "Buddy" }
    ],
    address: { country: "USA", state: "WA", city: "Seattle" }
});

family.save((err, saveFamily) => {
    console.error(err)
    console.log(JSON.stringify(saveFamily));
});

mongoose.connect("mongodb://cosmos-mongo-mongoose:EttKoHPkdDJmrP7WgPcm9DLw9FVxd9sW0LCeHBL4PvQ9XQ7p94ibkk10Y7JAzVFLERY1PJxBk4VoACDbQ3BWbg==@cosmos-mongo-mongoose.mongo.cosmos.azure.com:10255/Azure?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmos-mongo-mongoose@", {
 
 useNewUrlParser: true,
 useUnifiedTopology: true,
 retryWrites: false
 })
 .then(() => console.log('Connection to CosmosDB successful'))
 .catch((err) => console.error(err));