const express = require('express');
const userRoutes = require('./routes/user.route');
const taskRoutes = require('./routes/task.route');

const app = express();

app.use(express.json()); // application/json
app.use('/task-manager/user', userRoutes);
app.use('/task-manager/task', taskRoutes);

module.exports = app;