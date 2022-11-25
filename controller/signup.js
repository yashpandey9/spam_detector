const User = require('../model/user');

const create = async(req, res) => {
    try{
        const newUser = new User({
            name: req.body.name,
            phone_no: req.body.mobile_no,
            email_id: req.body.email,
            password: req.body.pass_hash
        });
        
        let response = await newUser.save();
        return res.status(200).json( {
            id : response._id,
            name : req.body.name
        })
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = create;