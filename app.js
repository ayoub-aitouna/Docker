const e = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
//miodlewares
app.use(bodyparser.json());
app.use(cors());
//import routes

const routes = require('./routes/posts');
//app.use('/posts', router);
app.use('/posts', routes);


app.get('/', (req, res) => {
    res.send('Home');
})

//connect to mongoDb
mongoose.connect(process.env.Db_Connection, { useNewUrlParser: true, useUnifiedTopology: true }, (c) => {
    console.log("connected to mongoDb");
})

const Port = process.env.PORT || 8080;

app.listen(Port, () => { console.log(`listinig on port ${Port}`) });