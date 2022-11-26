const register_user_service = require("../services/user_register");

const create = async(req, res) => {
    try{
        const name = req.body.name;
        const phone_no = req.body.phone_no;
        const email_id = req.body.email;
        const password = req.body.password;

        const response = await register_user_service(name,phone_no,password, email_id);
        
        return res.status(200).json(response);
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = create;