const route = require("express").Router();
const contact_upload = require('../controller/contact_upload');

route.get("/",(req,res)=>{
    res.status(200).json({
        hello: "world"
    })
})

route.post("/contacts", contact_upload);

module.exports = route;