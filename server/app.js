require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const profileRoutes= require('./routes/profileRoutes')


const app = express();



app.use(cors());

app.use(express.json());
app.use("/api", profileRoutes);


app.listen(8080, () => {
  console.log("Server running on port 8080");
});