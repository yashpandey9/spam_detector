const route = require("express").Router();

const signup = require('../controller/signup');

route.post("/signup", signup);

module.exports = route;