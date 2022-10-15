// in backend/server.js
const http = require("http");
const app = require("./app");

// Importar mongoose, dotenv, mongoMask.
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const mongoMask = require('mongo-mask');

// PORT de connexió backend.
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT);
app.set(port);

// Recuperar la contrasenya Hash.
const PUBLIC_BAIT = process.env.PUBLIC_BAIT;
app.get("/", (req, res, next) => {
  return res.send(process.env.PUBLIC_BAIT);
});
 
// Insruccions del Server.
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);
 