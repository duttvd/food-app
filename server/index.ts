import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDB";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from "./routes/user.Route";
import restaurantRoute from "./routes/restaurant.route";
import menuRoute from "./routes/menu.route";
import orderRoute from "./routes/order.route";



dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// api
app.unsubscribe("/api/v1/user", userRoute);
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credential: true
}
app.use(cors(corsOptions))
// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/menu", menuRoute);
app.use("/api/v1/order", orderRoute);


app.listen(PORT, () => {
  connectDb();
  console.log(`server listen at port ${PORT}`);

});
