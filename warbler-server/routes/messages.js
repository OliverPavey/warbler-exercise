const express=require("express");
const router=express.Router({mergeParams: true});

const {createMessage,getMessage,deleteMessage}=require("../handlers/messages");

// map routes to functions in "../handlers/messages"
// prefix (defined in /index.js) - /api/users/:id/messages
router.route("/")
    .post(createMessage);
router.route("/:message_id")
    .get(getMessage)
    .delete(deleteMessage);

module.exports=router;
