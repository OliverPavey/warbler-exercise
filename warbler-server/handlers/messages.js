const db=require("../models");

exports.createMessage=async function(req,res,next) {
    try {
        const params_id = req.params.id;
        const body_text = req.body.text;

        let message=await db.Message.create({
            text: body_text,
            user: params_id,
        });
        
        let foundUser=await db.User.findById(params_id);
        foundUser.messages.push(message.id);
        await foundUser.save();

        let foundMessage=await db.Message.findById(message.id)
            .populate("user",{
                username: true,
                profileImageUrl: true,
            });
        console.log(`MESSAGE: ${JSON.stringify(foundMessage)}`);

        return res.status(200).json(foundMessage);

    } catch(err) {
        console.log(`ERROR :::: ${JSON.stringify(err)}`);
        return next(err);
    }
};

exports.getMessage=async function(req,res,next) {
    try {
        let message = await db.Message.findById(req.params.message_id);
        return res.status(200).json(message);

    } catch(err) {
        return next(err);
    }
};

exports.deleteMessage=async function(req,res,next) {
    try {
        let foundMessage = await db.Message.findById(req.params.message_id);
        await foundMessage.remove();
        return res.status(200).json(foundMessage);

    } catch(err) {
        return next(err);
    }
};
