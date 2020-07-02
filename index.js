const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 5000;

// Middleware for serving static files such as images, CSS files, and JavaScript files
app.use(express.static(path.join(__dirname, "client/build")));

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Render the React build file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Test API
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.listen(port, () => console.log(`App at http://localhost:${port}`));
