const http = require('http');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const port = 5500;
const host = '127.0.0.1';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let requestPath = req.url.split('?')[0];

  if (requestPath === '/') {
    requestPath = '/index.html';
  }

  const filePath = path.join(root, decodeURIComponent(requestPath));

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const contentType = mime[path.extname(filePath).toLowerCase()] || 'text/plain; charset=utf-8';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Serving http://${host}:${port}`);
});
