const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();

// CORS — local + production (set CLIENT_URL on host)
const allowedOrigins = [
  "https://portfolio-application1.vercel.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  process.env.CLIENT_URL,
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    const normalizedOrigin = origin ? origin.replace(/\/$/, "") : origin;
    const isAllowed = !normalizedOrigin || allowedOrigins.includes(normalizedOrigin);

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome To Portfolio1 Application Server</h1>");
});

app.get("/health", (req, res) => {
  res.json({ success: true, message: "ok" });
});

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 9004;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
