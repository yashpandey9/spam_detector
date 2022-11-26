const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const userSchema = new Schema({
   name: {
     type: String,
     required: true
   },
   mobile_no: {
     type: Number,
     required: true
   },
   email: {
      type: String,
      required: false
   },
   pass_hash: {
    type: String,
    required : true
   }
});

const User = mongoose.model('User', userSchema);

module.exports = User;