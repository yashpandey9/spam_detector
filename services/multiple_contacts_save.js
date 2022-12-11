const contact_model = require('../model/contacts');

const contacts_save = async(user_id, contacts) => {
    try{
        for(let i=0; i<contacts.length; i++){
            let contacts_doc = await contact_model.findOne({user_id: user_id, mobile_no: contacts[i].mobile_no})
            if(!contacts_doc){
                contacts_doc = contact_model.create({
                    user_id: user_id,
                    name: contacts[i].name,
                    mobile_no: contacts[i].mobile_no
                   })
            }
        }
        return {
            message: "contacts saved successfully!"
        }
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = contacts_save;