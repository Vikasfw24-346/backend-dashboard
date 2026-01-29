import Insight from "../models/Insight.js";

const getInsights = async (req, res) => {
  try {
    const filters = {};

    // Exact number filter
    if (req.query.end_year)
      filters.end_year = Number(req.query.end_year);

    // Text filters (case-insensitive)
    if (req.query.topic)
      filters.topic = { $regex: req.query.topic, $options: "i" };

    if (req.query.sector)
      filters.sector = { $regex: req.query.sector, $options: "i" };

    if (req.query.region)
      filters.region = { $regex: req.query.region, $options: "i" };

    if (req.query.country)
      filters.country = { $regex: req.query.country, $options: "i" };

    if (req.query.city)
      filters.city = { $regex: req.query.city, $options: "i" };

    if (req.query.pestle)
      filters.pestle = { $regex: req.query.pestle, $options: "i" };

    if (req.query.source)
      filters.source = { $regex: req.query.source, $options: "i" };

    
    const data = await Insight.find(filters).lean();

    res.json(data);
  } catch (error) {
    console.error("Error fetching insights:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default getInsights;
