const db=require("../models");
const models=require("../models");

exports.listMessages=async function(req,res,next) {
    try {
        let messages=await db.Message.find()
            .sort({createdAt: "desc"})
            .populate("user",{
                username: true,
                profileImageUrl: true,
            });
        return res.status(200).json(messages);
    } catch(err) {
        return next(err);
    }
};