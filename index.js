import cors from "cors";
import express from "express";
// middleware
// import notFoundMiddleware from "./middleware/not-found.js";
// import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import connectDB from "./db/connect.js";
// Routers
import songRouter from "./routes/songsRoutes.js";
// import authenticateUser from "./middleware/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});
app.use("/api/v1/songs", songRouter);

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("connected to db");

    app.listen(port, () => {
      console.log(`server listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
