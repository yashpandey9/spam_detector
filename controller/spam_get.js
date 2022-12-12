const spam_count = require('../services/spam_get_service');

const spam_get = async(req, res) => {
    try{
      const mobile_no = req.body.mobile_no;

      const response = await spam_count(mobile_no);
        
      return res.status(200).json(response);
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = spam_get;