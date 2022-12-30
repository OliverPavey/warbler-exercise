require("dotenv").config();
const jwt=require("jsonwebtoken");

exports.loginRequired=function(req,res,next) {
    try {
        const token=req.headers.authorization.split(" ")[1]
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded) {
            if(decoded) {
                // Successful login.
                next();
            } else {
                throw "Login unsuccessful.";
            }
        });
    } catch(err) {
        // Always return the same error (where unsuccessful)
        return next({
            status: 401,
            message: "Please login first."
        });
    }
};

exports.ensureCorrectUser=function(req,res,next) {
    try {
        const token=req.headers.authorization.split(" ")[1];
        const params_id=req.params.id;
        console.log(`ID: ${params_id} TOKEN: ${token}`);
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded) {
            console.log(`TOKEN => ${JSON.stringify(decoded)}`);
            console.log(`TOKEN.ID => ${JSON.stringify(decoded.id)}`);
            if(decoded&&decoded.id===params_id) {
                console.log("Authorized.");
                // Message user id (in body) and validated bearer id match, so:
                // Allow request through.
                next();
            } else {
                throw "Not authorized."
            }
        });
    } catch(err) {
        // Block request with Unauthorized error.
        return next({
            status: 401,
            message: "Unathorized."
        });
    }
};