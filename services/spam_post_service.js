const spam_model = require('../model/spam');

const marking_spam = async(user_id, mobile_no) => {
    try{
          let spam_doc = await spam_model.findOne({user_id: user_id, mobile_no: mobile_no});
          if(!spam_doc){
            spam_doc = spam_model.create({
                user_id,
                mobile_no
            })
          }
          return {
            message: "number is marked as spam!"
          }
        }
    catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = marking_spam;