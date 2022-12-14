const user_model = require("../model/user");
const contacts_model = require("../model/contacts");

const searching_byname = async (name) => {
  try {
    const search_doc = await user_model.findOne({ name: name });
    if (!search_doc) {
      db.contacts_model
        .aggregate([
          { $match: { name: "name" } },
          { $group: { _id: "$name", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $project: { _id: 0, _id: 1 } },
          { $limit: 1 },
        ])
        .pretty();
    }
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const searching_bynumber = async (mobile_no) => {
  try {
    const search_doc = await user_model.findOne({ mobile_no: mobile_no });
    if (!search_doc) {
      db.contacts_model
        .aggregate([
          { $match: { name: "mobile_no" } },
          { $group: { _id: "$mobile_no", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $project: { _id: 0, _id: 1 } },
          { $limit: 1 },
        ])
        .pretty();
    }
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = {
  searching_byname,
  searching_bynumber,
};
