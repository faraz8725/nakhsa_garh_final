const express=require("express");
const app=express();
app.use(express.json());
const cors = require("cors");

app.use(cors());
const userRoutes=require("./routes/user");

app.use("/api/user",userRoutes);

module.exports=app;