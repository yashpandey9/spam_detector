const user_model = require("../model/user");
const compare_password_service =require("../utilities/password_services").compare_password;

const login_user_service=async(phone_no, password)=>{
    try{ let user_data = await user_model.findOne({
             mobile_no : phone_no
            }); 
         if(user_data){
            const password_check = await compare_password_service(password, user_data.pass_hash);
            if(password_check){
                return {
                    user_id : user_data._id,
                    name : user_data.name,
                    phone_no : user_data.mobile_no
                }
            }else{
                throw new Error("Passwords don't match!");
            }
         }else{
            throw new Error("No user found!");
         } 
    }
    catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = login_user_service;