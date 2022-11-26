const user_model = require("../model/user");

const register_user_service=async(name, phone_no, password, email)=>{
    try{
        let user_data = await user_model.findOne({
            mobile_no : phone_no
        });
        // user found with given mobile no
        if(user_data)
            throw new Error("User already registered");

        // user not found therefore creating new one
        user_data = {
            name,
            mobile_no : phone_no,
            pass_hash : password
        };

        if(email)
            user_data.email = email;

        user_data = await user_model.create(user_data);

        return {
            user_id : user_data._id,
            name : user_data.name,
            phone_no : user_data.mobile_no
        }
        
    }
    catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = register_user_service;