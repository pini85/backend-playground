const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname)));

app.post("/test", (req, res) => {
  console.log("hello");
  const message = req.body;
  return res.send(message);
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
