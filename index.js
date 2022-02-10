require('dotenv').config();
const express = require('express')

const server = express();

const PORT = process.env.PORT || 8080;

server.get('/api/users', (req,res) => {
    res.json([
        {id: 1, username: 'foo'},
        {id: 1, username: 'bar'},
        {id: 1, username: 'bob'}
    ])
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});