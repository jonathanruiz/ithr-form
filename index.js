const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3050;

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test API
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// Test API
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
