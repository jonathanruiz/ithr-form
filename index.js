const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test API
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`App at http://localhost:${port}`));
