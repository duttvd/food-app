import express from "express";
import dotenv from "dotenv";
import connectDb from "./connectDB";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDb();
  console.log(`server listen at port ${PORT}`);

})
