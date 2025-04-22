const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected ✅")
    } catch (error) {
        console.log("MongoDB connection error ❌: ", error.message);
        process.exit();
    }
}

module.exports = connectDB;