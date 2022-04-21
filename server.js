// Static server file

const http = require('http');

const port = 4000;
const localhost = '127.0.0.2';

// the server request
const server = http.createServer((req, res) => {
  // route request goes in here 
});

// the port 
server.listen(port, localhost, () => {
    console.log(`server running on ${localhost}:${port}`);
})