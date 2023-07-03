import "dotenv/config";
import express from "express";
import cors from "cors";
import corsOptions from "./configs/corsOptions.ts";
import cookieParser from "cookie-parser";
import credentials from "./middlewares/credentials.ts";
import taskRouter from "./routes/tasksRoutes.ts";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import markdownIt from "markdown-it";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/tasks", taskRouter);

const publicPath = path.join(__dirname, "../");
app.use(express.static(publicPath));

const readmePath = path.join(publicPath, "README.md");
const readmeContent = fs.readFileSync(readmePath, "utf8");
const renderedReadme = markdownIt().render(readmeContent); // Render the Markdown using markdown-it

const PORT = process.env.PORT || 5005;
app.get("/", (req, res) => {
  const styledHTML = `
    <html>
      <head>
        <style>
          body {
            color: #ccc;
            background-color: #333;
          }
        </style>
      </head>
      <body>
        ${renderedReadme}
      </body>
    </html>
  `;
  res.send(styledHTML);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});