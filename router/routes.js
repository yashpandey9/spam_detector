const route = require("express").Router();

const signup = require('../controller/signup');
const login = require('../controller/login');

route.post("/signup", signup);
route.post("/login", login);

module.exports = route;