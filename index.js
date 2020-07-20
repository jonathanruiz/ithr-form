// Imports
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

// If in production, execute the production build
if (app.get("env") === "production") {
  // Connect to MongoDB on container
  mongoose
    .connect("mongodb://mongo:27017/docker-node-mongo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

  // Render the React build file
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
// If in development, exectute the production build
else {
  // Connect to local MongoDB
  mongoose
    .connect("mongodb://localhost:27017/docker-node-mongo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

  // Send a test
  app.get("/api/test", (req, res) => {
    console.log("You are in the homepage!");
  });
}

// Test API
app.get("/api/hello", (req, res) => {
  console.log("I got it!");
});

// Show the env
console.log(`You are running in ${app.get("env")}`);

app.listen(port, () => console.log(`App at http://localhost:${port}`));
