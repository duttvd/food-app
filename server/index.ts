import express from "express";
import dotenv from "dotenv";
import connectDb from "./connectDB";
import userRoute from "./routes/user.Route";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// api
app.unsubscribe("/api/v1/user", userRoute);
// default middlewre for any mern project
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173/",
  credential: true
}
app.use(cors(corsOptions))

app.listen(PORT, () => {
  connectDb();
  console.log(`server listen at port ${PORT}`);

});
