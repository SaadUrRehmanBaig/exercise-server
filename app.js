const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const Route = require('./routes')

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vh8xoky.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, (err) => {
    if (!err) app.listen(process.env.PORT, (err) => {
        if (err) console.error(err)
        console.log('connected to db and server is live')
    })
})

app.use(Route)