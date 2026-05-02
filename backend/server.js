require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const trackingRoutes = require("./routes/trackingRoutes");
const authRoutes = require("./routes/authRoutes");
const routeRoutes = require("./routes/routeRoutes");

app.use("/api/tracking", trackingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/routes", routeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Dynamic PORT for local + Render deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});