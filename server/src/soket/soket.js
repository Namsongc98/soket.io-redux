const { Server } = require("socket.io");
const soket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    socket.on("create-something", function (data) {
      console.log(data);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

module.exports = soket;
