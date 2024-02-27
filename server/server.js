var express = require("express");
const http = require("node:http");
const socket = require("./src/soket/soket");
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;
const server = http.createServer(app);

socket(server);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
