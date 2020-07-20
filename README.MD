# ITHR Form

## Introduction

This application is an IT and HR form that will allow IT and HR to collaborate and obtain the required information to onboard a new employee. It will be made to be dynamic so that the two departments can build it out to contain the information that is requried to get new employee setup

## Requirements

1. Docker

## Structure

This is a MERN app ran on two containers:

- `node-react-app` - a React frontend with an Express backend.
- `mongo` - contains a plain mongo database.

Here is the structure tree of the node-react-app

```
root
│   .dockerignore
│   .gitignore
│   docker-compose.yml
│   Dockerfile
│   index.js
│   package-lock.json
│   package.json
│   README.MD
│   text.txt
│
├───client
│   │   .gitignore
│   │   package-lock.json
│   │   package.json
│   │   README.md
│   │
│   ├───public
│   │       favicon.ico
│   │       index.html
│   │       logo192.png
│   │       logo512.png
│   │       manifest.json
│   │       robots.txt
│   │
│   └───src
│           App.css
│           App.js
│           App.test.js
│           index.css
│           index.js
│           logo.svg
│           serviceWorker.js
│           setupTests.js
│
├───models
│       Item.js
```

## Deployment

To deploy the container, open up your terminal and find get to the root folder of the app and run the following command:

```
docker-compose up -d
```

Docker will then look for the `Dockerfile` found in the root folder and will download the images and run the container into production mode and run `npm` scripts to make sure it compiles a production ready version of the app. For further details on it is deployed, look at the `Dockerfile` comments.

Once deployed, go to [localhost](http://localhost) to access the application
