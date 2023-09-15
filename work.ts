import http , {IncomingMessage, ServerResponse} from  'http';

const server = http.createServer((req: IncomingMessage , res: ServerResponse) => {
  // Extract user-agent header to get browser information
  const userAgent = req.headers['user-agent'] || 'Unknown Browser';
  
  // Get the client's IP address
  const clientIP = req.connection.remoteAddress || 'Unknown IP';

  // Send an HTML response displaying browser and IP information
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body>');
  res.write(`<h1>Browser and PC Information is ${userAgent}</h1>`);
  res.write(`<p>Your browser: ${userAgent}</p>`);
  res.write(`<p>Your IP address: ${clientIP}</p>`);
  res.write('</body></html>');
  res.end();
});

const port = 4000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});