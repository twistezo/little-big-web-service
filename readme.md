### Little Big Web Service 
[![Build Status](https://travis-ci.org/twistezo/little-big-web-service.svg?branch=master)](https://travis-ci.org/twistezo/little-big-web-service)

### Description
Currently it is a playground/draft for Node.js + MongoDB RESTful API server and React client of web service.<br/>
Client uses two databases for testing: MongoDB from server and Firebase from cloud.

### Tools
Server: Node.js, Express, MongoDB<br/>
Client: React, Bootstrap, Firebase<br/>
Other: Webpack, Gulp, Babel, npm, Travis CI

### Requirements
npm or yarn, gulp-cli, MongoDB, Node.js

### Build, run, test, deploy
Server:<br/>
```
start MongoDB server: mongod (from path where you installed MongoDB)
start Node.js server: npm run start
go to: http://localhost:3000/tasks or you can test REST API in Postman
```
Client:<br/>
```
go to client/ and use one of below:

build: npm install or yarn
run: gulp serve
test: gulp test
deploy: firebase deploy
```

### Client Gulp & npm all scripts info
```
gulp or gulp build
gulp serve
gulp serve:dist
gulp test
gulp test:auto

npm run build
npm run serve
npm run serve:dist
npm run test // with Karma
npm run test:auto // with Karma in watch mode
```

### The latest version
https://twistezo.github.io/little-big-web-service/