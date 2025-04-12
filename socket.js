module.exports = function(io) {
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("joinRoom", ({ roomId, user }) => {
      socket.join(roomId);
      socket.to(roomId).emit("userJoined", `${user} joined the room.`);
    });

    socket.on("codeChange", ({ roomId, code }) => {
      socket.to(roomId).emit("receiveCode", code);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
