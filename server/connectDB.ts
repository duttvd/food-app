// mongoo-wC1PJBz1OyLn5ors     pa
// poppervishnu525
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.createConnection(process.env.MONGO_URI!);
        console.log(`mongoDB connected.`);
    } catch (error) {
        console.log(error);

    }
}
export default connectDb;