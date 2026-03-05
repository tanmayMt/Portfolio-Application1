const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
// MongoDB connection
connectDB();


// ✅ CORS Configuration
const allowedOrigins = [
    "https://portfolio-application1.vercel.app",
    process.env.CLIENT_URL,
    // "http://localhost:3000",
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST,PUT,DELETE",
    credentials: true // Allow cookies and authentication headers
};

// Middleware
app.use(cors(corsOptions));
// app.use(cors());
// Middleware to Parse json data
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line

// Routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome To Portfolio1 Application Server</h1><br>")
});
app.use("/contact", contactRoutes);


const PORT = process.env.PORT || 9004;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));