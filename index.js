const express = require("express");
const cors = require("cors");
const app = express();
const server = require("https").createServer(app);
const WebSocket = require("ws");

app.use(cors());
app.use(express.json());

const wss = new WebSocket.Server({ server });
wss.on("connection", function connection(ws) {
  console.log("new client connected");
  ws.send("welcome new client");
  ws.on("message", function incoming(message) {
    console.log("message recived", message);
    ws.send("got your message its" + message);
  });
});
app.post("/test", (req, res) => {
  console.log("hello");
  const message = req.body;
  return res.send(message);
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
