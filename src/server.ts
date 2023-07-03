import "dotenv/config";
import express from "express";
import cors from "cors";
import corsOptions from "./configs/corsOptions.ts";
import cookieParser from "cookie-parser";
import credentials from "./middlewares/credentials.ts";
import taskRouter from "./routes/tasksRoutes.ts";

const app = express();
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/tasks", taskRouter);

const PORT = process.env.PORT || 5005;
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});