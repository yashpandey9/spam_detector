const contact_save = require('../services/contact_save');

const contact_upload = async(req, res) => {
    try{
      const user_id = req.headers.user_id;
      const name = req.body.name;
      const mobile_no = req.body.phone_no;

      const response = await contact_save(user_id,name,mobile_no);
        
      return res.status(200).json(response);
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = contact_upload;