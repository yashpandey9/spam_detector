const search_name = require('../services/search_service').searching_byname;
const search_number = require('../services/search_service').searching_bynumber;

const search = async(req, res) => {
    try{
      const mobile_no = req.body.mobile_no;
      const name = req.body.name;
      
      if(!mobile_no){
        const response = await search_name(name);
        return res.status(200).json(response);
      }

      if(!name){
        const response = await search_number(mobile_no);
        return res.status(200).json(response);
      }
        
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = search;