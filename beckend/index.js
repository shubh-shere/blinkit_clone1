const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Your route handler logic goes here
    res.send('welcome to the beckend');
});

app.listen(5000, () => {
    console.log('app is running on 5000');
});
