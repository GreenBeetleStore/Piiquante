/** in backend/server.js */

// Importacions .
const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");

// Middleware General Helmet per protegir capçaleres.
app.use(
  helmet({
    referrerPolicy: { policy: "no-referrer" },
    referrerPolicy: { policy: ["origin", "unsafe-url"] },
    frameguard: { action: "deny" },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "example.com"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: { policy: "credentialless" },
    crossOriginOpenerPolicy: true,
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
    crossOriginOpenerPolicy: { policy: "unsafe-none" },
    crossOriginResourcePolicy: true,
    crossOriginResourcePolicy: { policy: "same-site" },
    crossOriginResourcePolicy: { policy: "cross-origin" },
    expectCt: { maxAge: 86400, enforce: true },
    hsts: { maxAge: 63072000, preload: true },
    dnsPrefetchControl: { allow: true },
    permittedCrossDomainPolicies: { permittedPolicies: "none" },
  })
);

// Middlewares autònoms Helmet.
app.use(helmet.noSniff("dont-sniff-mimetype"));
app.use(helmet.originAgentCluster());
app.use(helmet.ieNoOpen("ienoopen"));
app.use(helmet.hidePoweredBy("hide-powered-by"));
app.use(helmet.xssFilter("x-xss-protection"));

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

// Recuperar la contrasenya Hash. Pista falsa anti-piratatge per despistar.
const CLAU_SECRETA = process.env.CLAU_SECRETA;
app.get("/", (req, res, next) => {
  return res.send(process.env.CLAU_SECRETA);
});

// Insruccions de generació del Servidor.
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

// El servidor escolta al port.
server.listen(port);
