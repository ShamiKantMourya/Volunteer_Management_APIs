const mongoose = require("mongoose");

MONGOOSE_URI = process.env.MONGO_DB;

exports.dataBase = () => {
  mongoose
    .connect(MONGOOSE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB:", error);
    });
};
