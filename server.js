const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3030;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
};

http.createServer((req, res) => {
  const filePath = '.' + req.url;
  const extname = path.extname(filePath);
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('File not found');
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    }
  });
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);