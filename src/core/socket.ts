import socket from "socket.io";
import http from "http";

export default (http: http.Server) => {
   const io = require("socket.io")(http, {
      cors: {
        origins: "*:*",
        methods: ["GET", "POST"]
      }
    });

   io.on("connection", function(socket: socket.Socket) {
      
   });

   return io;
};