const route = require("express").Router();
const contact_upload = require('../controller/contact_upload');
const multiple_contacts_upload = require('../controller/multiple_contacts_upload');
const spam_post = require('../controller/spam_post');
const spam_count = require('../controller/spam_get');
const search = require('../controller/search');

route.post("/contacts", contact_upload);
route.post("/multiplecontacts", multiple_contacts_upload);
route.post("/spam", spam_post);
route.get("/spam", spam_count);
route.get("/search", search);

module.exports = route;