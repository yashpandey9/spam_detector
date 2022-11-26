const User = require('../model/user');

const create = async(req, res) => {
    try{
        const name = req.body.name;
        const phone_no = req.body.phone_no;
        const email_id = req.body.email;
        const password = req.body.password;

        if(!name|| !phone_no||!password){
            throw new Error("name, phone_no and password are mandatory params");
        }
        
        const new_user_data = {
            name,
            mobile_no : phone_no,
            pass_hash : password
        }

        if(email_id)
            new_user_data.email = email_id;

        const newUser = new User(new_user_data);
        
        let response = await newUser.save();
        return res.status(200).json( {
            name : response.name,
            id : response._id,
            phone_no: response.mobile_no
        });
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = create;