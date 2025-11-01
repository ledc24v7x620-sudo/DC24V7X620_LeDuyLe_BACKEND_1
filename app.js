const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Route kiểm tra hoạt động
app.get("/", (req, res) => {
  res.json({ message: "Welcome to DC24V7X620 - Le Duy Le Backend!" });
});

module.exports = app;
