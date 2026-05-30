const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);
  }
};

module.exports = connectDB;