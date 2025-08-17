

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Route imports
const authRoutes = require("./routes/authRoutes");
const compileRoutes = require("./routes/compileRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
  process.env.FRONTEND_URL,         // deployed Netlify frontend
  "http://localhost:3000",          // React dev server
  "http://127.0.0.1:3000"           // alternate local
];
// Enable CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
     credentials: true, // allow cookies/auth if needed
  })
);

app.options("*", cors());

// Parse JSON
app.use(express.json());

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api", compileRoutes); // ✅ Correct prefix for compile
app.use("/api", userRoutes);      // ✅ Optional: clarify user endpoints

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
