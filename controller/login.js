const login_user_service = require("../services/login_register");

const login = async(req, res) => {
    try{
        const phone_no = req.body.phone_no;
        const password = req.body.password;
        if(!phone_no || !password){
            throw new Error("Mandotory params are missing!");
        }

        const response = await login_user_service(phone_no,password);
        
        return res.status(200).json(response);
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = login;