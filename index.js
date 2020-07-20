const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 5000;

// Middleware for serving static files such as images, CSS files, and JavaScript files
app.use(express.static(path.join(__dirname, "client/build")));

// Middleware for security using HTTP headers
app.use(helmet());

// Connect to MongoDB
// mongoose
//   .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// If in production, execute the production build
if (app.get("env") === "production") {
  // Render the React build file
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// If in development, exectute the production build
if (app.get("env") === "development") {
  // Send that this is a dev page
  app.get("/", (req, res) => {
    res.send("This is the development page");
  });
}

// Test API
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// Show the env
console.log(app.get("env"));

app.listen(port, () => console.log(`App at http://localhost:${port}`));
