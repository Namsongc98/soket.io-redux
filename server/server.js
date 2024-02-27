const http = require("node:http");
const socket = require("./src/soket/soket");
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
socket(server);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
