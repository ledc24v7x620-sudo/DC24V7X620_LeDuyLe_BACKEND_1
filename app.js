const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Welcome to DC24V7X620 - Le Duy Le Backend!" });
});
app.use("/api/contacts", contactsRouter);
module.exports = app;
