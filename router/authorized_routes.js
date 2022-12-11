const route = require("express").Router();
const contact_upload = require('../controller/contact_upload');
const multiple_contacts_upload = require('../controller/multiple_contacts_upload');

route.post("/contacts", contact_upload);
route.post("/multiplecontacts", multiple_contacts_upload);

module.exports = route;