const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('House Rent Management is Running...')
})
app.listen(port, () => {
    console.log(`Example App Listening On Port ${port}`);
})