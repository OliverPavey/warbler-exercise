const express=require("express");
const router=express.Router();
const {signup,signin}=require("../handlers/auth");

// Map POST handler to functions in "../handlers/auth".
router.post("/signup",signup);
router.post("/signin",signin);

module.exports=router;
