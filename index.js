const express = require('express');
const mongoose = require('mongoose'); //MongoClient
const bodyParser = require('body-parser');
const routes = require('./src/routes/crmRoutes'); //import and export part of ES6, how do I make it available for express and node?? 

const app = express();
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/express-practice', {useNewUrlParser: true}); // useMongoClient: true no longer necessary in mongoose 5.x

//body parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.json()); //adding middleware

routes(app);

app.get('/', (req,res) => {//(root, callback(req, res))
    res.send({'message':'Henlo'});
});


const port = process.env.PORT || 8000; 
app.listen(port, () => console.log(`Listening on port ${port}...`)); //port defined by hosting environment variable
