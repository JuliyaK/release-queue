const express = require('express');
const tasks = require('./tasks.json');
var cors = require('cors');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use(cors());

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(3001, () => {
    console.log('Application started on port 3001');
});
