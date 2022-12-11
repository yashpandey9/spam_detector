const contact_model = require('../model/contacts');

const contact_save = async(user_id, name, mobile_no) => {
    try{
        contacts = {
            user_id,//user logged in
            name, //user's contact book element no 1
            mobile_no //user's contact book element no 1
        };
        contacts = await contact_model.create(contacts);
        return {
            message: "contacts saved successfully!"
        }
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = contact_save;