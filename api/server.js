const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const tasks = require("./app/tasks");

const users = require("./app/users");

const config =  require("./config");

const port = 8000;
const app = express();


mongoose.set('useCreateIndex', true);
mongoose.connect(config.db.url + '/' + config.db.name, {useNewUrlParser: true });
const db = mongoose.connection;


app.use(cors());
app.use(express.static('public'));
app.use(express.json());

db.once('open', () => {
    app.use('/tasks', tasks);
    app.use('/users', users);
    app.listen(port, () => console.log(`Server started on ${port}`));
});