const express = require('express');

const server = express();

const port = 4000

server.get('/',(req, res) =>{
    res.send('Hello World!')
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})