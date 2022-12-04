const contact_model = require('../model/contacts');

const contact_save = async(user_id, name, mobile_no) => {
    try{
        contacts = {
            user_id,// kakka user logged in
            name, // kakka's contact book element no 1
            mobile_no // kakka's contact book element no 1
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