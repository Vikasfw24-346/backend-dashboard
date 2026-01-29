import mongoose from "mongoose";

const InsightSchema = new mongoose.Schema({
  end_year: Number,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
  city: String,
});

const Insight =
  mongoose.models.Insight || mongoose.model("Insight", InsightSchema);

export default Insight;
