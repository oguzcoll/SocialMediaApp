import express from "express";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comments.js";
import likeRoute from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/likes", likeRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("API IS WORKING");
});
