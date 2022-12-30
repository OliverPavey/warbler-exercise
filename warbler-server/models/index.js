const mongoose=require("mongoose");

async function connectToMongoose() {
    mongoose.set("debug",true);
    mongoose.Promise=Promise;
    try {
        await mongoose.connect(
            process.env.MONGODB_URI || "mongodb://localhost/warbler",
            {
                keepAlive: true,
                // useMongoClient: true,
            });
    } catch(err) {
        console.log(`MongoDB/Mongoose connection error: ${err}`);
    }
}
connectToMongoose();

module.exports.User=require("./user.js");
module.exports.Message=require("./message.js");
