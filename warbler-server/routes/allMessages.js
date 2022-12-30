const express=require("express");
const router=express.Router({mergeParams: true});

const {listMessages}=require("../handlers/allMessages");

// map routes to functions in "../allMandlers/allMessages"
router.route("/")
    .get(listMessages);

module.exports=router;
