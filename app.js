import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import 'dotenv/config';
import meRouter from "./routes/get_me.routes.js";
import uploadRouter from "./routes/upload.routes.js";

const app = express();

// Middleware
app.use(bodyParser.json());

// List of allowed origins
const allowedOrigins = [
    "http://localhost:3000",
    "https://drive-google-docs.pages.dev"
];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200 // For legacy browser support
};

console.log(process.env.MONGODB_URL);

// Apply CORS middleware
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/me", meRouter);
app.use("/api/uploads", uploadRouter);

export { app };