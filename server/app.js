require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const profileRoutes= require('./routes/profileRoutes')


const app = express();

pp.use(cors({
  origin: "http://localhost:5173",   
  credentials: true                  
}));

app.use(express.json());
app.use("/api", profileRoutes);


app.listen(8080, () => {
  console.log("Server running on port 8080");
});