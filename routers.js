// To import express library
const express = require("express");
const { use } = require("express/lib/application");

// Import data.js
const database = require("./data");

// define a router object
let router = express.Router();

// define an API to return all the users
router.get("/users/all", (request, response) => {
  let users = database.get_all_users();
  response.send(users);
});

// define an API to get user based on user_id passed in the request.
router.get("/users/by-uid", (request, response) => {
  let user = database.get_user_by_user_id(request.query.uid);
  response.send(user);
});

// define an POST API to add a new user to database. 
User's information is passed request's body section.

module.exports = { router };
