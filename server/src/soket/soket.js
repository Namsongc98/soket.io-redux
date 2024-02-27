const { Server } = require("socket.io");
const soket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(socket);
  });
};

module.exports = soket;
