const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
];

const server = http.createServer((req, res) => {
  // res.statusCode = 404;
  // res.setHeader('Content-Type', 'application/json');
  // res.setHeader('X-Powered-By', 'Node.js');

  res.writeHead(400, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  let body = [];
  // Retrieve body data from client
  req
    .on('data', (chuck) => {
      body.push(chuck);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
      error: 'Please add email',
      success: false,
      data: null,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
