const mongoose = require("mongoose");

// Connect to MongoDB
exports.connect = function (uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("Successfully connected to MongoDB..."))
    .catch((err) => console.log("Failed to connect to MongoDB: \n" + err));
};

// Disconnect from mongo when app closes
process.on("SIGINT", () => {
  mongoose.disconnect().then(() => {
    console.log("Successfully disconnected from MongoDB...");
    process.exit(0);
  });
});
