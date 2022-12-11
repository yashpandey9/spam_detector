const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const spamSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    mobile_no: {
      type: Number,
      required: true
    }
})

const Spam = mongoose.model('Spam', spamSchema);

module.exports = Spam;