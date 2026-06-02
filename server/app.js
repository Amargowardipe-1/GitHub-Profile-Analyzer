require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const profileRoutes= require('./routes/profileRoutes')


const app = express();



app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://git-hub-profile-analyzer-z3mk-c5s9g48hb.vercel.app",
    "https://git-hub-profile-analyzer-z3mk.vercel.app/",
  
  ],
  credentials: true
}));

app.use(express.json());
app.use("/api", profileRoutes);


app.listen(8080, () => {
  console.log("Server running on port 8080");
});