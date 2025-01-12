const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello this is docker, Dockerized Node.js!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
