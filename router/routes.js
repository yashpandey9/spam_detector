const route = require("express").Router();
const authorized_routes = require("./authorized_routes");
const authorize_middleware =require("../middleware/authorize");

const signup = require('../controller/signup');
const login = require('../controller/login');

route.post("/signup", signup);
route.post("/login", login);
route.use("/authorized", authorize_middleware,authorized_routes);

module.exports = route;