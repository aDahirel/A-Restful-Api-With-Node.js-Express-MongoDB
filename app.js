const express = require('express');
/* Init express */
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
/* Use .env */
require('dotenv/config')
/* Middleware */
app.use(cors());
app.use(bodyParser.json());
// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

/* Routes */
app.get('/', (req, res) => {
    res.send('We are home')
});

/* Connect to DB */
mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log("error : " + err);
});

/* Listen to the server */
app.listen(3000)