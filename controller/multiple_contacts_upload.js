const multiple_contacts_save = require('../services/multiple_contacts_save');

const contacts_upload = async(req, res) => {
    try{
      const contacts = req.body.contacts;
      const user_id = req.headers.user_id;

      const response = await multiple_contacts_save(user_id,contacts);
        
      return res.status(200).json(response);
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = contacts_upload;