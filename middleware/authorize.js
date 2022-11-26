const user_model =require("../model/user");
const compare_password = require("../utilities/password_services").compare_password;
const authorize = async(req,res,next)=>{
    try{
        const user_id = req.header.user_id;
        const password = req.header.password;
        const user_data = await user_model.findOne({
            _id : user_id
        });
        if(!user_data)
            throw new Error("user not found")
        const is_password_same = await compare_password(password, user_data.pass_hash);

        if(is_password_same)
            next();
        else
            throw new Error("invalid credentials");
    }
    catch(err){
        console.log(err.message);
        return res.status(401).json({
            message : err.message
        });
    }   
}

module.exports = authorize;