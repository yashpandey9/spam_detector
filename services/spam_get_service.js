const spam_model = require('../model/spam');

const spam_count = async(mobile_no) => {
    try{
          let count = await spam_model.count({mobile_no: mobile_no});
            return {
                message: count 
              }
        }
    catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = spam_count;