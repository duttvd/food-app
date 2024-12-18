import express from "express";
import dotenv from "dotenv";
import connectDb from "./connectDB";
import userRoute from "./routes/user.Route";
import bodyParser from "body-parser"
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// api
app.unsubscribe("/api/v1/user", userRoute);

app.use(body)


app.listen(PORT, () => {
  connectDb();
  console.log(`server listen at port ${PORT}`);

});
