const dotenv = require("dotenv");
dotenv.config();
console.log(
  "RESEND KEY:",
  process.env.RESEND_API_KEY?.substring(0, 20)
);
console.log("Owner Email:", process.env.OWNER_EMAIL);
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Backend is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});