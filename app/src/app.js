const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Server Started');
});
