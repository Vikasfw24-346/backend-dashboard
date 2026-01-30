import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import "dotenv/config";
import Insights from "./routes/insights.js";

const app = express();
const port = process.env.PORT || 4000;

//STEP 2: Proper CORS configuration (IMPORTANT)
app.use(
  cors({
    origin: "*", // beginner / assignment ke liye OK
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api/insights", Insights);

app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
