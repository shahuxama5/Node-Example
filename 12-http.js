const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to home page");
    }
    if (req.url === '/about') {
        res.end("History of this page");
    }
    res.end(`
    <h1>404 Not Found!!!<h1/>
    <a href='/' />`
    );
});

server.listen(5000);