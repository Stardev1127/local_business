const WebSocket = require("ws");

function WSUtils() {
  const wsu = {};
  let clients = [];
  wsu.setWS = (server) => {
    const wss = new WebSocket.Server({ server });
    wss.on("connection", (ws) => {
      clients.push(ws);
    });
  };
  wsu.notifyAll = (msj) => {
    clients.forEach((ws) => {
      ws.send(msj);
    });
  };
  return wsu;
}

module.exports = WSUtils();
