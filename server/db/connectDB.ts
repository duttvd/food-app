// mongoo-wC1PJBz1OyLn5ors     pa
// poppervishnu525
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            ssl: true,
            tls: true,
            retryWrites: true,
            w: "majority"
        });
        console.log(`MongoDB connected successfully`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

export default connectDb;