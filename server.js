import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import "dotenv/config";
import Insights from "./routes/insights.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// DB connection
connectDB();

app.use("/api/insights", Insights);

app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
