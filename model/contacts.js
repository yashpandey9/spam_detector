const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const contactsSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
      type: String,
      required: true
    },
    mobile_no: {
      type: Number,
      required: true
    }
})

const Contact = mongoose.model('Contact', contactsSchema);

module.exports = Contact;