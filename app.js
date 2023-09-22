const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our page')
    }
    if (req.url === '/about') {
        res.end('this is our short history');
    }
    res.end(`
    <h1>Oops!!</h1>
    <p> the page that you are trying to reach does not exist</p>
     <p><a href="/">bach home</a></p>`)
})

server.listen(5000);