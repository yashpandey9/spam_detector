const route = require("express").Router();

route.get("/",(req,res)=>{
    res.status(200).json({
        hello: "world"
    })
})

module.exports = route;