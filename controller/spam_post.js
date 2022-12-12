const marking_spam = require('../services/spam_post_service');

const spam_mark = async(req, res) => {
    try{
      const user_id = req.headers.user_id;
      const mobile_no = req.body.mobile_no;

      const response = await marking_spam(user_id,mobile_no);
        
      return res.status(200).json(response);
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = spam_mark;